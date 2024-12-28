"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa6';
import Link from 'next/link';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      router.push('/login')
    }
  };

  return (
    <div className='lg:grid lg:grid-cols-2 bg-gray-50 w-full min-h-screen'>
      <div className="relative flex flex-col px-10 md:px-16 lg:px-10 xl:px-32 pb-10 pt-16">
        <h1 className='text-3xl font-bold text-left text-black'>
          Register To Start Your Journey
        </h1>

          <FaAngleLeft
          className="absolute left-9 top-5 p-2 bg-gray-300 rounded-full text-4xl text-gray-500 font-bold cursor-pointer"
          onClick={() => (router.push('/login'))}
          />

        <form onSubmit={handleSubmit} className='flex flex-col text-black space-y-4 mt-8'>
          <fieldset className="flex flex-col w-full items-start justify-center space-y-1">
            <label htmlFor="name">Name</label>
            <input
              className="w-full border border-solid p-4 rounded-lg bg-gray-200 border-gray-300 border-solid outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-gray-600"
              type="text"
              name="name"
              id="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-300 bg-gray-200 border-solid outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-gray-600"
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="password">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg border-gray-300 bg-gray-200 border-solid outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-gray-600"
              type="password"
              name="password"
              id="password"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg border-gray-300 bg-gray-200 border-solid outline-none focus:border-gray-500 transition-all duration-300 ease-in-out text-gray-600"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
          </fieldset>

          <div className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className="text-gray-800">
              I agree to all the <Link href="#" className="font-bold underline">terms and conditions</Link>.
            </label>
          </div>
          {errors.agree && <small className="text-red-500">{errors.agree}</small>}

          <button
            className='w-full bg-[#e76f51] text-white transition duration-300 ease-out py-3 rounded-lg mt-3'
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
