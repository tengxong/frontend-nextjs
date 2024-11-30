'use client';
import { Button, TextInput } from "flowbite-react";
import UserService from "@/services/userService";
import {
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaUserAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface SignupProps {
  switchToSignin: () => void;
}
const SignUp = ({ switchToSignin }: SignupProps) => {
  const router = useRouter();
  const userService = new UserService();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);



  const handleShowHidePw = () => {
    setShowPassword(!showPassword);
  };
  // don't refresh  regiter page
  const handleRegiter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //don't refresh it
    console.log("1111");
    const result = await userService.register({
      firstName: firstName,
      lastName: lastName,
      email,
      password
    });
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    console.log(result);
    if (result) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      router.push("/login")
    } else {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      {success && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-700 bg-green-100"
          role="alert"
        >
          <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
        </div>
      )}
      {error && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-700 bg-green-100"
          role="alert">
          <span className="font-medium">Error alert!</span> Change a few things up and try submitting again.
        </div>
      )}

      <div className="flex w-1/2 md:w-3/4 bg-white rounded-lg overflow-hidden">
        {/* Left Panel */}
        <div className="hidden w-1/2 bg-teal-600 text-white md:flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center mb-6">
            To keep connected with us please login with your personal info
          </p>
          <Button
            color="light"
            className="rounded-full mt-6 px-5 text-teal-600 hover:bg-gray-200 hover:text-teal-700"
            // gradientDuoTone="tealToWhite"
            onClick={switchToSignin}
          >
            Sign In
          </Button>
        </div>

        {/* Right Panel */}
        <div className="w-5/6 md:w-2/4 sm:w-3/4 p-6 flex flex-col justify-center items-center">
          <h2 className="flex justify-center text-2xl font-bold mb-4 text-teal-600">Create Account</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <p className="bg-gray-200 p-2 rounded-full">
              <FaFacebookF className="text-teal-500" />
            </p>
            <p className="bg-gray-200 p-2 rounded-full" >
              <FaGoogle className="text-red-500" />
            </p>
            <p className="bg-gray-200 p-2 rounded-full" >
              <FaGithub className="text-black" />
            </p>

          </div>
          <p className="text-center text-gray-500 mb-6 ">
            or use your email for registration:
          </p>
          <form onSubmit={handleRegiter}>
            <div className="flex flex-col gap-4 px-6">
              <TextInput
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"
                type="text"
                placeholder="FirstName"
                value={firstName}
                icon={FaUserAlt}
              // required
              />
              <TextInput
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
                type="text"
                placeholder="LastName"
                value={lastName}
                icon={FaUserAlt}
              // required
              />
              <TextInput
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                icon={MdEmail}
              // required
              />
              <TextInput
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="******"
                value={password}
                icon={RiLockPasswordFill}
                rightIcon={() =>
                  !showPassword ? (
                    <FaEye onClick={handleShowHidePw} className="cursor-pointer" />
                  ) : (
                    <FaEyeSlash onClick={handleShowHidePw} className="cursor-pointer" />
                  )
                }
              // required
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="space-x-4 mb-4 mt-6 px-2 rounded-full bg-teal-600"
                type="submit"
              >
                Sign Up
              </Button>
              <Button
                className="md:hidden space-x-4 mb-4 mt-6 px-5 rounded-full bg-teal-600"
                onClick={switchToSignin}
              >
                SIGN IN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp