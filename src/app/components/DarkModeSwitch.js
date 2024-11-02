'use client';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
    const {systemTheme,theme,setTheme} = useTheme();
    const[mounted,setMounted] = useState(false);
    useEffect(() => setMounted(true),[]);
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
    {mounted && currentTheme === "dark" ? (
        <MdLightMode className='cursor-pointer text-xl hover:text-red-400' onClick={()=>{
            setTheme("light")
        }}/>
    ):(
        <MdDarkMode className='cursor-pointer text-xl hover:text-red-400' onClick={()=>{
            setTheme("dark")
        }}/>
    )}
    </>
  )
}