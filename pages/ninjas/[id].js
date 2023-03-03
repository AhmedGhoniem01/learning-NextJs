//here we created a file with the name [id] 
//the square brackets means that the id param will be sent in the url
//so any url matching the following pattern => '/ninjas/:id' (where id is an number) => this page would then be rendered
import Head from "next/head"

const  ninja = () => {
    return(
        <div>
            <Head>
                <title>Ninja List | Ninja</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1>Ninja</h1>
        </div>
    )
}
export default ninja;
