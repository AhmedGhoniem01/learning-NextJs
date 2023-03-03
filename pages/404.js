//404.js => the custom error page when no urlis matched
//you can make custom css file and import it or you can just embed the css styles int he global file
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound(){
    //the router is used to navigte to different urls
    const router = useRouter();
    //the useEffect is used here to run the internal functions once the coponent/page is first renderd
    useEffect(() => {
        setTimeout(() => {
            //router.push => diectly route to the following url
            //router.go(-1) => return back
            //router.go(1) => goes forward
            router.push('/')
        }, 5000);
    }, [])

    return(
        <div className="not-found">
            <h1>404 Page not found</h1>
            <h3>Check you navigate to a correct link...</h3>
            <Link href='/'><p>Returning to Home-Page...</p></Link>
        </div>
    );
}