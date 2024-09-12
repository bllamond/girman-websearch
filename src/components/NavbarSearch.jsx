import SearchBox from "./SearchBox";
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function NavbarSearch() {
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
      };
  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-md h-20">
      {/* <div className="font-bold pl-10">
        <span className="text-4xl text-gray-900 ">Girman</span> <br />{" "}
        <span className=" text-xs font-mono tracking-[4px]">TECHNOLOGIES</span>
      </div> */}
      <div className="flex items-center pl-10">
        <Image
          src='/logo2.svg' 
          alt="Girman Technologies Logo" 
          width={150} // Adjust width as needed
          height={50} // Adjust height as needed
          className="object-contain" 
          onClick={handleLogoClick} 
        />
      </div>
      <div className="flex-grow max-w-md ml-4">
        <SearchBox />
      </div>
    </nav>
  );
}
