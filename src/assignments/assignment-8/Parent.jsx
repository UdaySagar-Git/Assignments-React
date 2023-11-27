import Child from "./Child";
import { Router, Routes, Route } from "react-router-dom";

const Parent = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/home" element={<Child />} />
        //         <Route path="/" element={<Child />} />
        //     </Routes>
        // </Router>
        <div>
            <Child/>
        </div>
    );
}

export default Parent;