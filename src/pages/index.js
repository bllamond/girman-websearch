import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-[#92e6f0] to-[#FFFFFF]">
    <Navbar />
    <div className="mt-20">
    <div className="flex items-center space-x-6 pb-8">
      <Image
          src="/logo3.jpeg"
          alt="Girman Technologies Logo"
          width={110} 
          height={50} 
          className="object-contain cursor-pointer rounded-lg"
        />
      <h1 className="text-8xl font-bold mb-8 text-gray-900 ">Girman</h1>
      </div>
      <SearchBox />
    </div>
  </div>
  );
}
