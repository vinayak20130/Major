"use client"
import React, { useState } from 'react';
import SignInModal from '@/Components/SignInModal';
import Login from '@/pages/Login';
import Navbar from '@/Components/Navbar';
import Dashboard from '@/pages/Dashboard';


const Page = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  return (
    <div>   
    <Navbar></Navbar>
      <Login />
      <SignInModal isOpen={isSignInModalOpen} onClose={toggleSignInModal} />
      <Dashboard></Dashboard>
    </div>
  );
}

export default Page;
