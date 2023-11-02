'use client'; 

import { usePathname } from 'next/navigation';
import  { FiSettings } from 'react-icons/fi'; 

const SettingsButton = () => {
    const pathname = usePathname(); 

    if(pathname === "/")
        return null; 
  return (
    <button 
        style = { { background: "blue "}}
        className = 'absolute bottom-6 text-3xl text-white right-10 hover:drop-shadow-3xl hover:bg-light-gray rounded-full p-3 transition duration-500'>
        <FiSettings/> 
    </button>
  )
}

export default SettingsButton