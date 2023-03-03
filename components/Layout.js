import Navbar from "./Navbar";
import Footer from "./Footer";
//HERE THE CHILDREN REFERS TO ANY PAGE CONTENT WHICH IS NOW WRAPPED INSIDE THE LAYOUT COMPONENT

export default function Layout({children}){
    return(
        <div className='content'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}