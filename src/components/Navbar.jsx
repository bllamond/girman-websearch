import Image from 'next/image';
import { useRouter } from 'next/router';
 // Update the path to your logo

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <nav className="flex justify-between items-center px-8 bg-white shadow-md h-20 w-full">
      <div className="flex items-center pl-10">
        <Image
          src="/Logo2.svg"
          alt="Girman Technologies Logo"
          width={150} 
          height={50} 
          className="object-contain cursor-pointer" // Add cursor-pointer for visual feedback
          onClick={handleLogoClick} // Add onClick handler
        />
        {/* <div className="ml-4 font-bold">
          <span className="text-4xl text-gray-900">Girman</span> <br />{" "}
          <span className="text-xs font-mono tracking-[4px]">TECHNOLOGIES</span>
        </div> */}
      </div>
      <div className="space-x-6 pr-10 text-lg font-semibold font-medium">
        <a href="" className=" underline text-blue-500">SEARCH</a>
        <a href="https://girmantech.com" className="text-gray-700 hover:text-blue-500" target="_blank">WEBSITE</a>
        <a href="https://www.linkedin.com/company/girmantech/" className="text-gray-700 hover:text-blue-500" target="_blank">LINKEDIN</a>
        <a href="mailto:contact@girmantech.com" className="text-gray-700 hover:text-blue-500">CONTACT</a>
      </div>
    </nav>
  );
}
