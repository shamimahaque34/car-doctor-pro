"use client"
// import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IoCartOutline, IoSearchSharp  } from "react-icons/io5";

const Navbar = ({lang}) => {
//  const session = useSession()
const pathname = usePathname()
    const router = useRouter()


    const handleLanguageChange = (e) =>{
      const newLocale =e.target.value;
     
      const path = pathname.split("/").slice(2).join("/");
      
      router.push(`/${newLocale}/${path}`);
    }
  return (
    <div className="bg-base-100  text-slate-900 border-b-[1px] py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={`/${lang}/`}>
            <Image alt="logo" src="../assets/logo.svg" height={60} width={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            
              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}` ? 'active bg-primary' : ''}`} href={`/${lang}/`}>Home
                
              </Link>

              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}/about` ? 'active bg-primary' : ''}`} href={`/${lang}/about`}>About
                
              </Link>
              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}/services` ? 'active bg-primary' : ''}`} href={`/${lang}/services`}>Services
                
              </Link>

              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}/my-bookings` ? 'active bg-primary' : ''}`} href={`/${lang}/my-bookings`}>MyBookings
                
              </Link>

              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}/blog` ? 'active bg-primary' : ''}`} href={`/${lang}/blog`}>Blog
                
              </Link>

              <Link
              className= {`font-semibold hover:text-primary duration-300 ${pathname === `/${lang}/contacts` ? 'active bg-primary' : ''}`} href={`/${lang}/contacts`}>Contacts
                
              </Link>
          
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
          <IoCartOutline className="text-xl"/>
          <IoSearchSharp className="text-xl"/>
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
          {/* <div>
            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>
          </div> */}
          {/* { session?.status === 'loading' &&
            <h6>Loading....</h6>
            }
          { session?.status === 'unauthenticated' &&
            <Link href="/login" className="btn btn-primary px-8">Login</Link>
            }
          { session?.status === 'authenticated' &&
            <button className="btn btn-outline btn-ghost px-8" onClick={() => signOut()}>Logout</button>
            } */}
            <select className="bg-primary" value={lang} onChange={handleLanguageChange}>
             <option   value="en">EN</option>
             <option value="bn">BN</option>
    </select>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Navbar;
