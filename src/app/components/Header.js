import MenuItem from "./MenuItem"
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
function Header() {
return (
    <div className="flex flex-row justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex flex-row">
            <div> <MenuItem title={'HOME'} address={"/"} Icon={IoMdHome}/></div>
            <div><MenuItem title={'ABOUT'} address={"/about"} Icon={FaInfoCircle}/></div>
        </div>
        <div className="flex items-center space-x-5">
            <DarkModeSwitch/>
            <Link href='/'>
                <h2 className="text-2xl mt-2">
                    <span className="mr-1 font-bold bg-red-400 py-1 px-2 rounded-lg">IMDb</span>
                    <span className="text-xl hidden sm:inline font-medium">Clone</span>
                </h2>
            </Link>
        </div>
    </div>
)
}

export default Header