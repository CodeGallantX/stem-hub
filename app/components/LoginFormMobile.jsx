"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaAngleLeft } from "react-icons/fa6";

const App = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userEmail, userPassword } = formData;

    // Mock authentication logic
    if (userEmail === 'test@mail.com' && userPassword === 'password123') {
      setErrorMessage('');
      router.push('/');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='light:bg-gray-200 dark:bg-gray-200 w-full min-h-screen'>
      <div className="flex flex-col space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-16 lg:py-8">
        <div className="mb-6 light:text-gray-200 dark:text-white">
          <h1 className='text-3xl font-bold text-left'>Welcome back! Continue your Learning Journey</h1>
        </div>

        <a href="/">
          <FaAngleLeft className="absolute left-9 top-5 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold" />
        </a>

        <form onSubmit={handleSubmit} className='flex flex-col light:text-gray-200 dark:text-white space-y-3 lg:space-y-4 mt-10'>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="userEmail">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-500 light:bg-gray-200 dark:bg-gray-200 outline-none light:focus:border-[#e76f51] dark:focus:border-gray-300 transition-all duration-300 ease-in-out light:text-gray-200 dark:text-white"
              type="email"
              name="userEmail"
              id="userEmail"  
              placeholder='Enter your email address'
              value={formData.userEmail} 
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="userPassword">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-200 border-gray-500 outline-none light:focus:border-[#e76f51] dark:focus:border-gray-300 [#e76f51] transition-all duration-300 ease-in-out light:text-gray-200 dark:text-white"
              type="password"
              name="userPassword" 
              id="userPassword"  
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.userPassword}
              onChange={handleChange}
              required
            />
          </fieldset>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <a href="/forgot-password" className='underline text-right text-sm'>Forgot password?</a>
          
          <button
            className='mt-2 w-full bg-[#e76f51] text-white py-3 rounded-lg'
            type="submit"
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 pt-10 flex flex-col space-y-3">
          <div className="flex flex-row items-center justify-center space-x-6">
            <a href="#">
              <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" className='w-5 h-5' />
            </a>
            <a href="#">
              <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Apple_logo_grey.svg.png?updatedAt=1727884280423" alt="Apple Icon" className='w-5 h-5' />
            </a>
          </div>
          <p className="text-center light:text-gray-200 dark:text-white">
            Don&apos;t have an account yet?{" "}
            <Link href="/register" className='font-bold underline'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
