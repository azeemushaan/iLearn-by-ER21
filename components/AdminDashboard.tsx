
import React, { useState } from 'react';
import { AdminPanelIcon, LockIcon } from './IconComponents';

const mockTeachers = [
  {
    name: 'Sarah Johnson',
    email: 's.johnson@school.edu',
    students: 28,
  },
  {
    name: 'Michael Chen',
    email: 'm.chen@school.edu',
    students: 32,
  },
  {
    name: 'Emily Rodriguez',
    email: 'e.rodriguez@school.edu',
    students: 25,
  },
];

const AdminDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAddTeacher = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('This is a demo. In a real app, this would add a new teacher to the database.');
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === 'admin@ilearn.com' && password === 'password123') {
      setIsLoggedIn(true);
      setError('');
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <section id="admin-panel" className="py-20 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful Admin Controls
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Manage your teachers and oversee your entire organization from one central hub.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl p-8">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-white text-center flex items-center justify-center">
                <LockIcon className="w-6 h-6 mr-3 text-blue-400"/>
                Admin Login
              </h3>
              <form onSubmit={handleLogin} className="mt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="admin-email" className="block text-sm font-medium text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="admin-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@ilearn.com"
                      className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="admin-password" className="block text-sm font-medium text-slate-300">
                      Password
                    </label>
                    <input
                      type="password"
                      id="admin-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password123"
                      className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                {error && <p className="mt-3 text-sm text-red-400 text-center">{error}</p>}
                <button
                  type="submit"
                  className="mt-6 w-full bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Add Teacher Form */}
              <div className="flex flex-col">
                 <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold text-white flex items-center">
                        <AdminPanelIcon className="w-6 h-6 mr-3 text-blue-400"/>
                        Add a New Teacher
                    </h3>
                    <button onClick={handleLogout} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                        Logout
                    </button>
                </div>
                <form onSubmit={handleAddTeacher} className="mt-6 flex-grow flex flex-col">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="teacher-name" className="block text-sm font-medium text-slate-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="teacher-name"
                        placeholder="e.g., Jane Doe"
                        className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="teacher-email" className="block text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="teacher-email"
                        placeholder="jane.doe@school.edu"
                        className="mt-1 block w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                  >
                    + Create Teacher Account
                  </button>
                </form>
              </div>

              {/* Teacher List */}
              <div>
                <h3 className="text-2xl font-semibold text-white">Current Teachers</h3>
                <ul className="mt-6 space-y-4">
                  {mockTeachers.map((teacher) => (
                    <li key={teacher.email} className="p-4 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{teacher.name}</p>
                        <p className="text-sm text-slate-400">{teacher.email}</p>
                        <p className="text-xs text-slate-500 mt-1">{teacher.students} students</p>
                      </div>
                      <button onClick={() => alert('Viewing teacher details... (Demo)')} className="text-sm font-medium text-blue-400 hover:text-blue-300">
                        Manage
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
