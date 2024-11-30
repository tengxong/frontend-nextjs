"use client";
import UserProfileComponent from "@/components/UserProfileComponent";
import React from "react";

const UserProfilePage = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const [userData, setUserData] = React.useState<any>(null); // Replace `any` with a proper type if available.


  const handleQueryUserData = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://192.168.100.8:4000/api/v1/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUserData(data);
    } catch (error: any) {
    }
  };

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  React.useEffect(() => {
    if (token) {
      handleQueryUserData();
    }
  }, [token]);

  return (
    <div>
        <UserProfileComponent user={userData} />
    </div>
  );
};

export default UserProfilePage;
