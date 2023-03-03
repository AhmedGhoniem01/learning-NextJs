// Creating a folder in the pages folder means that the folder name is also a part of the url
// for example: the url for this folder will be => ('/ninjas')
// and for the test page it would be => ('/ninjas/test')
import Head from "next/head"
//adding head next tag to crete custom head tags that are dynamically inserted in the head of the _app.js when the page is rendered
//head tag can be used for title and other metadata
export default function ninjas(){
    return(
        <>
            <Head>
                <title>Ninja List | Ninja-List</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1>Ninja-List</h1>
        </>
    )
}