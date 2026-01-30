"use client" 

import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export function Navbar () {
    const [dropDown, setDropDown] = useState(false);
     const toggleMenu = () =>{
        setDropDown(!dropDown)
     }
             return (
        <main className="bg-gray-100 shadow-gray-300 w-full">
            <div className="h-15 flex justify-between items-center px-5">
                <h1 className="text-3xl font-bold text-blue-500">Edgestack</h1>
                <ul className="hiddeen  md: flex gap-8 text-sm font-semibold">
                   <Link href="/"> <li>Home</li></Link>
                    <li>Enroll</li>
                    <li>Student-list</li>
                    <li>Profile</li>
                </ul>
               <Link href="/auth/login"> <div className="hidden md:w-20 h-10 rounded md:shadow md:text-white bg-blue-500 md:flex md:justify-center items-center">
                    <p>Sign Up</p>
                </div>
               </Link>
               <div className="block md:hidden">
                <IoMdMenu onClick={toggleMenu} className="text-3xl"/>
               </div>
            </div >
            {dropDown && (
            <div className="flex flex-col justify-center items-center">
                 <ul className=" flex flex-col gap-2 text-sm font-semibold md:hidden">
                   <Link href="/"> <li>Home</li></Link>
                    <li>Enroll</li>
                    <li>Student-list</li>
                    <li>Profile</li>
                </ul>
                     <Link href="/auth/login"> <div className="w-20 h-10 rounded shadow text-white bg-blue-500 flex justify-center items-center md
                     :hidden">
                    <p>Sign Up</p>
                </div>
               </Link>
             </div>
             )}
        </main>
    )
}