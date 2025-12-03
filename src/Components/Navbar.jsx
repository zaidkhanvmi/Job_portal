import React from 'react';
import { Link } from 'react-router-dom';  // if using React Router for navigation

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white">JobPortal</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/dashboard" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link to="/jobs" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
            <Link to="/applications" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Applications</Link>
            <Link to="/companies" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Companies</Link>
            <Link to="/settings" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Settings</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button type="button" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <Link to="/dashboard" className="text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
          <Link to="/jobs" className="text-white block px-3 py-2 rounded-md text-base font-medium">Jobs</Link>
          <Link to="/applications" className="text-white block px-3 py-2 rounded-md text-base font-medium">Applications</Link>
          <Link to="/companies" className="text-white block px-3 py-2 rounded-md text-base font-medium">Companies</Link>
          <Link to="/settings" className="text-white block px-3 py-2 rounded-md text-base font-medium">Settings</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
