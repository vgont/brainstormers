"use client";
import React, { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import ageList from "@/app/ageList"

export default function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
            <button onClick={()=> setIsOpen((prev)=> !prev)} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
                Dropdown
                {!isOpen ? (
                    <AiFillCaretDown className="h-8"/>
                ): (
                    <AiFillCaretUp className="h-8"/>
                )
                }
            </button>
            {isOpen && (
                <div className="bg-blue-400 absolute top-20 flex flex-col items-start round-lg p-2 w-full">
                    {ageList.map((item, i )=> (
                        <div className="flex w-full justify-center hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                            <button className="font-bold  p-4 ">{item.age}{item.year}</button>
                            <button className="font-bold  p-4"></button>
                        </div>
                    ))}                   
                </div>
            )}

        </div>
    )
}

// className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg"