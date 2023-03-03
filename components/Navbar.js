//Importing link component from next to allow url redirects

import Link from "next/link"
import Image from "next/image"
//adding image from next to handle images with easier to write classes

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <Image src='/logo.png' alt="site logo" width={100} height={60} />
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas/'>Ninja-List</Link>
      </nav>

    )
}