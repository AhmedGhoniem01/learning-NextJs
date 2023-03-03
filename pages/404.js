//404.js => the custom error page when no urlis matched
//you can make custom css file and import it or you can just embed the css styles int he global file
import Link from "next/link";

export default function NotFound(){
    return(
        <div className="not-found">
            <h1>Page not found</h1>
            <h3>Check you navigate to a correct link...</h3>
            <Link href='/'><p>Return to Home-Page</p></Link>
        </div>
    );
}