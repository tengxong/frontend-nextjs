"use client"
import { useParams } from 'next/navigation';
// import { useRouter } from 'next/router';
const UserPage: React.FC = () => {
// const router = useRouter();
const params = useParams();
const id = params?.id;
// const  {id}  = router;
return <h1>Users ID: {id}</h1>;
};
export default UserPage;