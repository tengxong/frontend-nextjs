"use client";
import { useState } from "react";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// import Button from './Button';
const FunctionComponent: React.FC<{ massage: string }> = ({ massage }) => {

const [isloading, setIsloading] = useState<boolean>(false);
const router = useRouter();
const handleNavigateToRegister = () => {
    try{
        setIsloading(true);
        router.push('/login');
    } catch(e){
        console.log(e);
    } finally{
        setIsloading(false);
    }
}

    return (
        <div className="flex flex-col gap-4 items-start justify-start">
            <div className=" w-full">
                <h1 className="example-global-css">{massage}</h1>
                <div className="bg-blue-500 text-red-500 p-4">{massage}</div>
            </div>

            <div className="flex items-start justify-start gap-4 w-full p-4">
                {/* <Button label="click me"/> */}
                <Link className="bg-red-600 text-white p-2 px-10 rounded-full" href={"/login"} color="red" >login</Link>
                <Button className="bg-blue-600 text-white px-10 rounded-full" href={"/login"} color="green" onClick={() => handleNavigateToRegister()}>{isloading ? "loading..." : "register"}</Button>
            </div>
        </div>
    );
};

export default FunctionComponent;