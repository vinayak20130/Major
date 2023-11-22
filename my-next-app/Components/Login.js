import Head from 'next/head';
import React from 'react'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | TimeMachine Trade</title>
      </Head>
      <div className="flex flex-col md:flex-row min-h-screen text-white">
        {/* Left Side */}
        <div className="md:w-1/2 w-full bg-black flex flex-col justify-center items-center py-10">
          {/* Your logo should go here, replace with your actual logo */}
          <div className="m-1 px-5 text-4xl md:text-7xl font-extrabold">TimeMachine Trades</div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 w-full bg-black flex flex-col justify-center items-center py-10">
          <div className="max-w-xs w-full">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Happening now</h2>
            <h3 className="text-xl md:text-2xl mb-8">Join today.</h3>
            {/* Replace with your form handling logic */}
            <form>
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
                <a href="#" className="text-white hover:underline text-lg md:text-2xl flex my-5">
                  Already have an account? Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
