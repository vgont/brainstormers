"use client";
import { useState } from "react";

export default function Toggle({children}){
    const [toggle, setToggle] = useState();

    function changeToggle(e){
        return setToggle(e.target.checked)
    }

    return(
        <label class="relative inline-flex items-center mb-5 cursor-pointer">
        <input onChange={(e)=> changeToggle(e)} type="checkbox" value="" class="sr-only peer"/>
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium">{toggle? 'Sim':'Não'}</span>
        </label>
    )
}


