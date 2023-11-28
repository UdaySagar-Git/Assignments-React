import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Technologies from "./components/Technologies";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

const Parent = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/technologies/*" element={<Technologies />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default Parent;