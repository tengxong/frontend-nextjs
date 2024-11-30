"use client";
import UserService from "@/services/userService";
import { Button, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SigninProps {
  switchToSignup: () => void;
}

const SignIn = ({ switchToSignup }: SigninProps) => {
  const router = useRouter();
  const userService = new UserService();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleShowHidePw = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    // setLoading(true);
    // try {
      const result = await userService.login({ email, password });
      console.log("====>", { result });
      if (result) {
        localStorage.setItem("token", result?.token);
        localStorage.setItem("refreshToken", result?.refreshToken);
      }
      router.push("/user-profile");
    // } catch (err) {
    //   setError("Invalid email or password.");
    // } finally {
    //   setLoading(false);
    // } 
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-5/6 lg:w-1/2 sm:w-1/2 flex rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="bg-white flex flex-col justify-center items-center p-2 space-y-4">
          <h1 className="text-teal-500 text-2xl font-bold text-center">
            Login to orkard tech system
          </h1>
          <div className="flex space-x-3">
            <div className="p-4 bg-gray-200 rounded-full cursor-pointer">
              <FaFacebookF className="text-teal-500" />
            </div>
            <div className="p-4 bg-gray-200 rounded-full cursor-pointer">
              <FaGoogle className="text-red-500" />
            </div>
            <div className="p-4 bg-gray-200 rounded-full cursor-pointer">
              <FaGithub className="text-black" />
            </div>
          </div>
          <p className="text-gray-400">or use your email account</p>
          <TextInput
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            icon={MdEmail}
            placeholder="example@gmail.com"
            required
          />
          <TextInput
            className="w-full"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={showPassword ? "text" : "password"}
            icon={FaLock}
            rightIcon={() =>
              !showPassword ? (
                <FaEye onClick={handleShowHidePw} className="cursor-pointer" />
              ) : (
                <FaEyeSlash onClick={handleShowHidePw} className="cursor-pointer" />
              )
            }
            placeholder="password"
            required
          />
          <div className="flex space-x-4">
          <Button
            className="mt-6 px-5 bg-teal-600 rounded-full"
            onClick={handleLogin}
          >
          Sign in
          </Button>
          <Button
            className="md:hidden mt-6 px-5 bg-teal-600 rounded-full"
            onClick={switchToSignup}
          >
            SIGN UP
          </Button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-teal-600 text-white p-2">
          <h2 className="text-3xl font-bold mb-4">Hello, friend!</h2>
          <p className="mb-6 text-center">
            Enter your personal details and start your journey with us!
          </p>
          <Button
            className="bg-transparent mt-6 px-5 border border-white rounded-full hover:bg-white hover:text-teal-500"
            onClick={switchToSignup}
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
