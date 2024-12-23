import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/my-image.jpg" // Path to the image in the public folder
        alt="Description of the image"
        layout="fill"              // Makes the image cover the container
        objectFit="cover"          // Ensures the image covers the area without distorting
        priority                   // Optional: Optimizes image loading for priority
      />
      <div className="absolute inset-0 flex justify-center items-center text-black z-10">
        <h1 className="text-4xl font-bold ">Welcome to My Website</h1>
      </div>
    </div>
  );
}
