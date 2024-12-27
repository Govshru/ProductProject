
"use client";
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import {useRouter} from 'next/navigation';


export default function Home() {
  const router=useRouter();
  const handlelogin=()=>{
    router.push(`/Login`);
  }

  const handleSignup=()=>{
    router.push(`/Signup`)
  }

  return (
    <Box className="relative w-full h-screen">
      <Image
        src="/images/my-image.jpg" // Path to the image in the public folder
        alt="Description of the image"
        layout="fill"              // Makes the image cover the container
        objectFit="cover"          // Ensures the image covers the area without distorting
        priority                   // Optional: Optimizes image loading for priority
      />
      <Box className="absolute inset-0 flex  justify-center items-center text-black z-10 space-x-4 ">
      <Box className="flex flex-col">

        <h1 className="text-4xl flex flex-col font-bold mb-4 ">Welcome to My Website</h1>
      </Box>
        <Button onClick={handlelogin} className='px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-600 '>Login</Button>
        <Button onClick={handleSignup} className='px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-600'>Signup</Button>
      </Box>
    </Box>
  );
}
