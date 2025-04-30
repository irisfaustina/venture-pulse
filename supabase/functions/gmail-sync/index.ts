import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { google } from 'npm:googleapis@133.0.0';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailData {
  id: string;
  threadId: string;
  subject: string;
  from: string;
  receivedDate: string;
  body: string;
  attachments: Array<{
    filename: string;
    mimeType: string;
    size: number;
  }>;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const auth = new google.auth.OAuth2(
      Deno.env.get('GMAIL_CLIENT_ID'),
      Deno.env.get('GMAIL_CLIENT_SECRET'),
      Deno.env.get('GMAIL_REDIRECT_URI')
    );

    const gmail = google.gmail({ version: 'v1', auth });

    // Get messages from the last 24 hours
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const response = await gmail.users.messages.list({
      userId: 'me',
      q: `after:${yesterday.getTime() / 1000}`,
    });

    const messages = response.data.messages || [];
    const emailData: EmailData[] = [];

    for (const message of messages) {
      const email = await gmail.users.messages.get({
        userId: 'me',
        id: message.id!,
        format: 'full',
      });

      const headers = email.data.payload?.headers;
      const subject = headers?.find(h => h.name === 'Subject')?.value || '';
      const from = headers?.find(h => h.name === 'From')?.value || '';
      const date = headers?.find(h => h.name === 'Date')?.value || '';

      const parts = email.data.payload?.parts || [];
      const bodyPart = parts.find(part => part.mimeType === 'text/plain');
      const body = bodyPart?.body?.data
        ? atob(bodyPart.body.data.replace(/-/g, '+').replace(/_/g, '/'))
        : '';

      const attachments = parts
        .filter(part => part.filename && part.body)
        .map(part => ({
          filename: part.filename!,
          mimeType: part.mimeType!,
          size: parseInt(part.body?.size?.toString() || '0'),
        }));

      emailData.push({
        id: message.id!,
        threadId: message.threadId!,
        subject,
        from,
        receivedDate: date,
        body,
        attachments,
      });
    }

    // Store the extracted data in Supabase
    const { error } = await supabase
      .from('emails')
      .insert(emailData);

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, count: emailData.length }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});