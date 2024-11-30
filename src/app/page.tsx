// import Button from "@/components/Button";
import ClassComponent from "@/components/ClassComponent";
import FunctionComponent from "@/components/FunctionComponent";

export default function Home() {
  return (
  <div> 
     <div className="text-pretty text-green-500">
      <ClassComponent message="what does this do?" />
    </div>
    <div className=" text-red-950 min-w-4xl dark:text-white text-base font-medium tracking-tight border-collapse p-4 flex accent-indigo-600 flex-nowrap m-1 col-start-2 flex-col">
      <ClassComponent message="what does this do?" />
      <FunctionComponent massage="lets see if this works" />
    </div>
    {/* <Button label="Click Me" /> */}
    <div className="p-5">
    {/* <Button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      Click flowbite
      </Button> */}
    </div>
    </div>
  )
}
// import ClassComponent from '@/components/ClassComponent';
// const ClassExamplePage = () => <ClassComponent message="Hello from Class Component!" />;
// export default ClassExamplePage;