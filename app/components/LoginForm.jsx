"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agree: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      if (formData.email === "test@mail.com" && formData.password === "password123") {
        console.log("Login successful!");
        router.push("/dashboard");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 2500);
  };

  return (
    <div className="lg:grid lg:grid-cols-2 bg-gray-50 w-full min-h-screen text-black">
      <div className="flex flex-col space-y-3 px-10 md:px-16 lg:px-10 xl:px-24 py-16">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <p className="text-gray-600 text-center">Join the community and unlock your learning potential</p>

        <div className="mt-4 w-full">
          <div className="flex flex-col items-center justify-center space-y-4">
            <a
              href="#"
              className="w-full flex flex-row items-center justify-center space-x-2 hover:bg-gray-200 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500"
            >
              <img
                src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </a>
          </div>
          <div className="flex flex-row space-x-5 items-center justify-center my-2">
            <span className="w-full h-[1px] bg-gray-300"></span>
            <span className="text-lg font-semibold">Or</span>
            <span className="w-full h-[1px] bg-gray-300"></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 lg:space-y-4 mt-4">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <fieldset className="flex flex-col items-start justify-center w-full space-y-1">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid py-4 px-6 rounded-full border-gray-300 bg-gray-100 outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="password">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid py-4 px-6 rounded-full bg-gray-100 border-gray-300 outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              type="password"
              name="password"
              id="password"
              placeholder="⁎⁎⁎⁎⁎⁎⁎⁎"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <button
            className="mt-2 w-full bg-[#e76f51] transition duration-300 ease-out py-3 rounded-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          <p>
            Don&apos;t have an account?{" "}
            <a href="/register" className="font-bold underline transition duration-300 ease-in-out">
              Sign up
            </a>
          </p>
        </form>
      </div>

      <div className="p-3">
        <div className="hidden rounded-lg overflow-hidden lg:block ml-auto lg:w-5/6 xl:w-11/12 relative h-full animate-gradient bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500">
          <div className="absolute bottom-0 w-full opacity-60 h-2/5 bg-black bg-opacity-30 blur"></div>
          <img
            className="object-cover w-full h-full"
            src="https://media.istockphoto.com/id/1307457224/photo/happy-black-student-raising-arm-to-answer-a-questing-in-the-classroom.jpg?s=612x612&w=0&k=20&c=2Z9Q7SE49Xjp3On0SDo20km15bwrifyWdlAMviLuP5I="
            alt="Classroom"
          />
          <div className="absolute w-full bottom-1/4 translate-y-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col space-y-4 items-center text-center px-8 text-white">
              <h1 className="text-4xl font-medium">Ask Questions with Ease</h1>
              <p className="text-xl">
                Post questions in any subject and get clear, reliable answers from students and contributors. Learning starts with a single question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
