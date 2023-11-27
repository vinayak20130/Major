"use client"
import SignInModal from '@/Components/SignInModal';
import Head from 'next/head';
import React, { useState } from 'react'; // Corrected import



export default function Login() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  // Function to handle the form submission and open the modal

  const handleCreateAccount = (event) => {
    event.preventDefault(); // Prevents the default form submission
    setModalOpen(true); // Opens the modal
  };

  const handleNext = () => {
    setModalOpen(false);
    setPasswordModalOpen(true);
  };

  const handleBack = () => {
    setPasswordModalOpen(false);
    setModalOpen(true);
  };

  const toggleSignInModal = () => {
    setSignInModalOpen(!isSignInModalOpen);
  };
  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setPasswordModalOpen(false);
  };
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const generateNumberOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };
  
  // You can generate days and years like this:
  const days = generateNumberOptions(1, 31);
  const years = generateNumberOptions(new Date().getFullYear() - 100, new Date().getFullYear());
  

  return (
    <>
      <Head>
        <title>Login | TimeMachine Trade</title>
      </Head>
      
      <div className="flex flex-col md:flex-row min-h-screen text-white">
        {/* Left Side */}
        <div className="md:w-1/2 w-full bg-black flex flex-col justify-center items-center py-10">
          <div className="m-1 px-5 text-4xl md:text-7xl font-extrabold">TimeMachine Trades</div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-black flex flex-col justify-center items-center py-10">
          <div className="max-w-xs w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Happening now</h2>
            <h3 className="text-xl md:text-2xl mb-8">Join today.</h3>
            {/* Replace with your form handling logic */}
            <form onSubmit={handleCreateAccount}> {/* Corrected function name */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-white text-black py-2 px-4 rounded-full font-medium"
                >
                  Create account
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-white-600">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center">
              <a href="#" className="text-white hover:underline text-lg md:text-2xl flex my-5" onClick={toggleSignInModal}>
                  Already have an account? Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
     {/* Modal Component */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        {/* Modal Close Button */}
        <button onClick={closeModal} className="float-right text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none">
          X
        </button>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Create Your Account</h3>
        {/* Modal content */}
        <form className="mt-2 px-7 py-3">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <div className="flex justify-between gap-3">
    <select className="border rounded py-2 px-3 text-gray-700" id="month">
      <option value="">Month</option>
      {months.map(month => (
        <option key={month} value={month}>{month}</option>
      ))}
    </select>
    <select className="border rounded py-2 px-3 text-gray-700" id="day">
      <option value="">Day</option>
      {days.map(day => (
        <option key={day} value={day}>{day}</option>
      ))}
    </select>
    <select className="border rounded py-2 px-3 text-gray-700" id="year">
      <option value="">Year</option>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              type="submit"
              id="ok-btn"
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
{isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="password-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <button onClick={handleBack} className="float-left text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none">
                ←
              </button>
              <button onClick={closeModal} className="float-right text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none">
                X
              </button>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Set Your Password</h3>
              <form className="mt-2 px-7 py-3">
                {/* New Password Input */}
                <div className="mb-4">
                  <label htmlFor="new-password" className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
                  <input type="password" id="new-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="New Password" />
                </div>
                {/* Confirm New Password Input */}
                <div className="mb-4">
                  <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password</label>
                  <input type="password" id="confirm-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Confirm Password" />
                </div>
                {/* Create Account Button */}
                <div className="items-center px-4 py-3">
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    
<SignInModal isOpen={isSignInModalOpen} onClose={toggleSignInModal} />
    </>
    
  );
}