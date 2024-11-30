"use client";
import { Modal, Button } from "flowbite-react";
import React from "react";

interface User {
  id: number;
  email: string;
  profile: string;
  firstName: string;
  lastName: string;
  dob: string;
  password?: string;
}

const UserProfileComponent: React.FC<{ user?: User | null }> = ({ user }) => {
  const [data, setData] = React.useState<User>({
    id: user?.id || 0,
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    dob: user?.dob || "",
    profile: user?.profile || "",
    password: user?.password || "",
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Updated User Data:", data);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="flex items-center justify-around h-screen w-full">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="flex flex-col items-center pb-10 pt-5">
          <img className="w-24 h-24 flex justify-start rounded-full border-2 border-red-300 object-cover" src={user?.profile || ""} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {user?.firstName} {user?.lastName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user?.email}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {user?.dob
              ? new Date(user.dob).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
              : 'N/A'}
          </p>

          <Button onClick={() => setIsModalOpen(true)}>Edit</Button>
        </div>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Update Profile</Modal.Header>
        <Modal.Body>
          <form className="space-y-4" onSubmit={handleUpdateProfile}>
            <div className="w-24 h-24 mx-auto">
              <img
                className="w-24 h-24 flex justify-start rounded-full border-2 border-red-300 object-cover"
                src={
                  data.profile ||
                  "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                }
                alt="Profile"
              />
            </div>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={data.firstName}
              onChange={handleInputChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={data.lastName}
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={data.email}
              onChange={handleInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={data.password || ""}
              onChange={handleInputChange}
            />
            <input
              name="dob"
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={data.dob}
              onChange={handleInputChange}
            />
            <Button type="submit" className="w-full bg-green-500">
              Update Profile
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfileComponent;
