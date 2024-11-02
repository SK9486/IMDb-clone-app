
import Link from "next/link"

function MenuItem({title,address,Icon}) {
  return (
    <Link href={address} className="mx-4 lg:mx-6 hover:text-red-500 font-semibold text-2xl">
    <Icon className="text-2xl sm:hidden mx-4"/>
    <p className="hidden sm:inline my-2 text-lg">{title}</p>
    </Link>
  )
}

export default MenuItem