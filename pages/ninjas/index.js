// Creating a folder in the pages folder means that the folder name is also a part of the url
// for example: the url for this folder will be => ('/ninjas')
// and for the test page it would be => ('/ninjas/test')

import Head from "next/head"
import styles from "../../styles/list.module.css"
import Link from "next/link";

//adding head next tag to crete custom head tags that are dynamically inserted in the head of the _app.js when the page is rendered
//head tag can be used for title and other metadata

//here we used getSttaticProps to prefetch any data before rendering the page
//we used fetch api to fetch data from a acertain api endpoint and then returned props object => {props: {key: value}}
//this props property can be passsed to the following page component and then data can be accessed directly[

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {ninjas: data}
    }
}

const  ninjas = ({ninjas}) => {
    return(
        <div>
            <Head>
                <title>Ninja List | Ninja-List</title>
                <meta name="keywords" content="ninjas"/>
            </Head>

            <h1>Ninja-List</h1>
            {ninjas.map((ninja) => (
                    <div key={ninja.id}>
                        <Link className={styles.single} href={"/ninjas/" + ninja.id}>
                            <h3>{ninja.name}</h3>
                        </Link>
                    </div>
                )
            )}

        </div>
    )
}
export default ninjas;
