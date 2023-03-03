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
//styles can be added either globally in the global css file
// styles in the global file applies to all pages
//or you can make seperate css file, one for each component and then you can import it and use it
//the naming convention for custom css files: page.module.css
//you also can have css files used for the components such as react
//importing the styles by using classes => className={styles.classname} && at the css file you must add styles by class not id

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Homepage</h1>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p> 
      <Link href="/ninjas/">
        <button className={styles.btn}>See Ninja Listing</button>
      </Link>
    </>
  );
}
