import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  Inbox, 
  BarChart2, 
  Users, 
  Calendar,
  FileText,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const linkClass = "flex items-center p-3 rounded-lg transition-all text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white";
  const activeLinkClass = "bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-white";

  return (
    <div 
      className={`fixed top-16 bottom-0 left-0 z-30 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
        isOpen ? 'w-64' : 'md:w-20'
      } overflow-y-auto transition-all duration-300`}
    >
      <div className="flex justify-end items-center h-16 px-4">
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none ${!isOpen && 'md:mx-auto'}`}
        >
          <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
        </button>
      </div>

      <nav className="px-2 py-4 space-y-1">
        <NavLink 
          to="/" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
          end
        >
          <Home className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Dashboard</span>}
        </NavLink>
        
        <NavLink 
          to="/dealflow" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <Inbox className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Dealflow</span>}
        </NavLink>

        <NavLink 
          to="/analytics" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <BarChart2 className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Analytics</span>}
        </NavLink>

        <NavLink 
          to="/network" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <Users className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Network</span>}
        </NavLink>

        <NavLink 
          to="/meetings" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <Calendar className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Meetings</span>}
        </NavLink>

        <NavLink 
          to="/documents" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <FileText className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Documents</span>}
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({isActive}) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
        >
          <Settings className={`h-5 w-5 ${isOpen ? 'mr-3' : 'mx-auto'}`} />
          {isOpen && <span>Settings</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;