//here we created a file with the name [id] 
//the square brackets means that the id param will be sent in the url
//so any url matching the following pattern => '/ninjas/:id' (where id is an number) => this page would then be rendered
import Head from "next/head"
//at build time at the server before next returns a aset of rendered html pages, any page that will be passed url params must clearify the range of the possible values of the params so
//next could pre-render all the pages with all the possible values of the passed params
//this is done using getStatic paths
//we map through all the users and with each user we return a obj => params: {id: possible-id-value-but-as-a-str}
//then the getstaticpaths function at last returns an obj => {paths: paths, fallback: false}


//here after all the possible pages with the possible id values are pre-built on the server side and returned as rendered pages, we use getstaticprops to handle the data fetching
//getstaticprops here fetches the data of a certain user and returns it
// the props can be passed to the page component so the data inside the props which had beeen fetched can be accessed
//the params passed in the url can be accessed through context particularly => context.params.id
//this id is used to fetch the data of the user having this id and this it's returned as an obj => {props: {user: user-value}}
//the props can then be accessed through the props passed to any following function
//destructuring is a good approach especially if there's only one param in the passed props obj

export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map((ninja) => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    console.log("Pre-Built-pages: ", paths)
    return{paths, fallback: false}
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    return{
        props: {ninja: data}
    }
}

const  ninja = ({ninja}) => {
    return(
        <div>
            <Head>
                <title>Ninja List | Ninja</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1>Name: {ninja.name}</h1>
            <h1>Email: {ninja.email}</h1>
            <h1>Website: {ninja.website}</h1>
            <h1>City: {ninja.address.city}</h1>
        </div>
    )
}
export default ninja;
