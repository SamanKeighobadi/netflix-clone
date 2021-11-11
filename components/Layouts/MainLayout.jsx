import Footer from "../common/Footer";
import Navbar from "../NavBar";

const Mainlayout = ({children}) => {
    return (
        <div>   
        {/* <Navbar /> */}
            {children}
        <Footer />
        </div>
    );
}

export default Mainlayout;
