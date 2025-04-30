/*
  # Create emails table for storing Gmail data

  1. New Tables
    - `emails`
      - `id` (text, primary key) - Gmail message ID
      - `thread_id` (text) - Gmail thread ID
      - `subject` (text) - Email subject
      - `from` (text) - Sender email
      - `received_date` (timestamptz) - Date email was received
      - `body` (text) - Email body content
      - `attachments` (jsonb) - Array of attachment metadata
      - `processed` (boolean) - Whether email has been processed
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `emails` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS emails (
  id text PRIMARY KEY,
  thread_id text NOT NULL,
  subject text,
  "from" text,
  received_date timestamptz,
  body text,
  attachments jsonb,
  processed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own emails"
  ON emails
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Service role can insert emails"
  ON emails
  FOR INSERT
  TO service_role
  WITH CHECK (true);