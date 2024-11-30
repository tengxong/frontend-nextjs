import FunctionComponent from "@/components/FunctionComponent";

export default function page() {
    return (
        <nav className="grid grid-cols-2">
            <FunctionComponent massage="hello world" />
        </nav>
    )
}