//In next, the pages file include the pages to be routed to
//each page file name is also the name of its route
//index is the main route so (index.js => '/' route)
//Creating a components folder is necessary to crete reusable html components
//the components can be imported and reused in a page file such as shown and in a similar way as react.
//Notice the component tag and don't forget to imprt it

import Head from 'next/head'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />

      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p> 
      <Link href="/ninjas/">
        <p>See Ninja Listing</p>
      </Link>

      <Footer />
    </>
  );
}
