'use client'
import { useEffect, useState } from "react";
import { clearTokens, getAccessToken, getRefreshToken, setTokens } from "@/services/tokenService";
import Signin from "@/components/LogIn/SignIn";
import Signup from "@/components/LogIn/SignUp";

const LogInPage = () => {

  useEffect(() => {
    // การเก็บ tokens 
    setTokens('yourAccessToken', 'yourRefreshToken');
    // การเรียกใช้ tokens 
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    // ลบ tokens
    clearTokens();
  }, []);
  const [formType, setFormType] = useState<'signin' | 'signup'>('signin');
  return (
    <nav>
      {formType === 'signin' ? (
        <Signin switchToSignup={() => setFormType('signup')} />
      ) : (
        <Signup switchToSignin={() => setFormType('signin')} />
      )}
    </nav>
  )
}
export default LogInPage