import React from 'react';
import Link from 'next/link';

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Sign In</h3>
          <div className="mt-2">
            <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mt-2"/>
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mt-2"/>
            <Link href="/Dashboard" passHref>
              <button className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button onClick={onClose} className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;