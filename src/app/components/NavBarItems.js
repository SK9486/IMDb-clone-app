'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
function NavBarItems({title,param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
        <Link href={`/?genre=${param}`} className={`m-3 font-bold dark:hover:text-red-400 hover:text-red-500 p-2 ${
          genre && genre === param && "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"}`}>{title}</Link>
    </div>
  )
}

export default NavBarItems;