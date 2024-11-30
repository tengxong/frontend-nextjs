"use client"
import { useSearchParams } from "next/navigation";

const SearchPage: React.FC = () => {
const searchParam = useSearchParams();
const search = searchParam?.get('keyword');
const term = searchParam?.get('term');
return <h1>Search Results for: {search}{term}</h1>};
export default SearchPage;