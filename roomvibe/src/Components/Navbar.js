
import Link from "next/link";
import Image from "next/image";
import ProfileImage from '../../public/images/avatar.png'

import { FaSearch } from "react-icons/fa";

export default function Navbar () {
  return (
    // This is the navigation bar
    <header className="flex lg:flex-row items-center justify-between lg:justify-around py-6 px-5 fixed lg:relative w-[100%] z-50">
      {/* This is the Logo */}
      <div>
        <h1><Link href="/" className="text-2xl font-semibold">Room<span className="text-3xl text-[#fd7e14]">V</span>ibe</Link></h1>
      </div>

      {/* This is the Navigation Links */}
      <nav className="hidden lg:flex">
        <ul className="flex flex-col lg:flex-row gap-10 text-xl">
          {navItems.map((items) =>(
            <li key={items.id}>
              <Link href={items.url}>{items.Name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* profile section */}
      <div>
        <Image src={ProfileImage} alt="profile" width={50} className="hidden lg:block rounded-full border-2 border-[#fd7e14]"/>
        <FaSearch size={30} className="flex lg:hidden"/>
      </div>
    </header>
  )
}

const navItems = [
  {
    Name: 'Home',
    url: '/'
  },
  {
    Name: 'About',
    url: '/about'
  },
  {
    Name: 'Explore Hostels',
    url: '/explore-hostels'
  },
  {
    Name: 'Contact Us',
    url: '/contact-us'
  },
]