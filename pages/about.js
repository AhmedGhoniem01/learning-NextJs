//Two methods to write function components
//either write it as a normal function or arrow function

// export default function About(){
//     return(
//         <>
//             <h1>Hello from about</h1>
//         </>
//     )
// }
import Head from "next/head";

const About = () => {
    return(
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
            </div>
      </>
    )
}
export default About;