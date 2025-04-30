import React, { useState } from 'react';
import { format, addDays, startOfWeek, endOfWeek, addWeeks, subWeeks, parseISO, isSameDay, addHours, setHours, setMinutes } from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, Search, Calendar, Users, FileText, Link as LinkIcon, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockDeals } from '../data/mockData';

interface Meeting {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  companyId: string;
  attendees: string[];
  location?: string;
  type: 'pitch' | 'followup' | 'diligence' | 'other';
  notes?: string;
}

// Helper function to create a date with specific hours and minutes
const createDateTime = (date: Date, hours: number, minutes: number = 0): Date => {
  return setMinutes(setHours(date, hours), minutes);
};

const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Financial Pitch Team Meeting',
    startTime: createDateTime(new Date(), 12, 0),
    endTime: createDateTime(new Date(), 13, 0),
    companyId: '1',
    attendees: ['Sarah Chen', 'Alex Thompson', 'Michael Roberts'],
    location: 'Zoom',
    type: 'pitch',
    notes: 'Initial pitch discussion with the founding team'
  },
  {
    id: '2',
    title: 'Engineering Deep Dive',
    startTime: createDateTime(new Date(), 12, 0),
    endTime: createDateTime(new Date(), 13, 30),
    companyId: '2',
    attendees: ['Michael Williams', 'John Davis', 'Tech Team'],
    location: 'Conference Room A',
    type: 'diligence',
    notes: 'Technical architecture review and scalability discussion'
  },
  {
    id: '3',
    title: 'MCP In The Wild',
    startTime: createDateTime(new Date(), 13, 0),
    endTime: createDateTime(new Date(), 14, 0),
    companyId: '3',
    attendees: ['David Kumar', 'Sarah Chen'],
    location: 'https://us02web.zoom.us/j/123456789',
    type: 'followup',
  }
];

const timeSlots = Array.from({ length: 13 }, (_, i) => i + 9); // 9 AM to 9 PM

const Meetings = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'week' | 'month'>('week');
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

  const getMeetingsForDateTime = (date: Date, hour: number): Meeting[] => {
    return mockMeetings.filter(meeting => {
      const meetingHour = meeting.startTime.getHours();
      return isSameDay(meeting.startTime, date) && meetingHour === hour;
    });
  };

  const getCompanyById = (id: string) => {
    return mockDeals.find(deal => deal.id === id);
  };

  const getMeetingTypeStyles = (type: Meeting['type']) => {
    switch (type) {
      case 'pitch':
        return 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-200';
      case 'followup':
        return 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800 text-green-700 dark:text-green-200';
      case 'diligence':
        return 'bg-purple-50 dark:bg-purple-900 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-200';
      default:
        return 'bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200';
    }
  };

  const handleMeetingClick = (meeting: Meeting) => {
    setSelectedMeeting(selectedMeeting?.id === meeting.id ? null : meeting);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                view === 'week'
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                view === 'month'
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Month
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search meetings..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            New Meeting
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentDate(subWeeks(currentDate, 1))}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {format(startOfCurrentWeek, 'MMMM d')} - {format(endOfCurrentWeek, 'MMMM d, yyyy')}
              </h2>
              <button
                onClick={() => setCurrentDate(addWeeks(currentDate, 1))}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Today
            </button>
          </div>
        </div>

        <div className="grid grid-cols-8 border-b border-gray-200 dark:border-gray-700">
          <div className="border-r border-gray-200 dark:border-gray-700 p-2 text-right">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">GMT-04</span>
          </div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`p-2 text-center border-r border-gray-200 dark:border-gray-700 ${
                isSameDay(day, new Date()) ? 'bg-blue-50 dark:bg-blue-900' : ''
              }`}
            >
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {format(day, 'EEE')}
              </div>
              <div className={`text-sm font-semibold ${
                isSameDay(day, new Date())
                  ? 'text-blue-600 dark:text-blue-300'
                  : 'text-gray-900 dark:text-white'
              }`}>
                {format(day, 'd')}
              </div>
            </div>
          ))}
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {timeSlots.map(hour => (
            <div key={hour} className="grid grid-cols-8">
              <div className="border-r border-gray-200 dark:border-gray-700 p-2 text-right">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {format(setHours(new Date(), hour), 'h a')}
                </span>
              </div>
              {weekDays.map((day, dayIndex) => (
                <div
                  key={`${hour}-${dayIndex}`}
                  className="relative border-r border-gray-200 dark:border-gray-700 min-h-[4rem]"
                >
                  {getMeetingsForDateTime(day, hour).map((meeting) => (
                    <div
                      key={meeting.id}
                      onClick={() => handleMeetingClick(meeting)}
                      className={`group relative cursor-pointer ${
                        selectedMeeting?.id === meeting.id ? 'z-20' : 'z-10'
                      }`}
                    >
                      <div
                        className={`absolute left-0 right-0 m-1 p-2 rounded-md border ${getMeetingTypeStyles(meeting.type)}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">
                            {format(meeting.startTime, 'h:mm a')}
                          </span>
                        </div>
                        <p className="text-sm font-medium truncate mt-1">
                          {meeting.title}
                        </p>
                        <div className="flex items-center mt-1 space-x-2">
                          <Users className="h-3 w-3" />
                          <span className="text-xs">{meeting.attendees.length}</span>
                        </div>
                      </div>

                      {selectedMeeting?.id === meeting.id && (
                        <div 
                          className="absolute left-full top-0 ml-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{meeting.title}</h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedMeeting(null);
                                }}
                                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                            
                            <div className="space-y-4">
                              <div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Time</div>
                                <div className="mt-1 text-sm text-gray-900 dark:text-white">
                                  {format(meeting.startTime, 'h:mm a')} - {format(meeting.endTime, 'h:mm a')}
                                </div>
                              </div>

                              <div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</div>
                                <div className="mt-1 text-sm text-gray-900 dark:text-white">
                                  {meeting.location}
                                </div>
                              </div>

                              <div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Attendees</div>
                                <div className="mt-1 space-y-1">
                                  {meeting.attendees.map((attendee, index) => (
                                    <div key={index} className="text-sm text-gray-900 dark:text-white">
                                      {attendee}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="flex space-x-2 pt-2">
                                <Link
                                  to={`/company/${meeting.companyId}`}
                                  className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  View Company
                                </Link>
                                <Link
                                  to={`/meetings/${meeting.id}/notes`}
                                  className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                                >
                                  <FileText className="h-4 w-4 mr-2" />
                                  Meeting Notes
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meetings;