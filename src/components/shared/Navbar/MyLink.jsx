"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({ href, children}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex gap-2 items-center p-2 font-semibold ${pathname === href ? "text-white bg-[#244D3F] rounded-lg" : ""}`}
    >
      
      {children}
    </Link>
  );
};

export default MyLink;