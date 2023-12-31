import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "./technologies/React";
import Angular from "./technologies/Angular";
import Vue from "./technologies/Vue";

const Technologies = () => {
    const path="/assignment-9/technologies"

    return (
        <div className="h-[85vh] ">
            <div className="flex justify-center gap-10 h-[30%] items-center">
                <Link to={`${path}/react`}><button className="bg-orange-600 text-white px-4 py-2 rounded-md">React</button></Link>
                <Link to={`${path}/angular`}><button className="bg-orange-600 text-white px-4 py-2 rounded-md">Angular</button></Link>
                <Link to={`${path}/vue`}><button className="bg-orange-600 text-white px-4 py-2 rounded-md">Vue</button></Link>
            </div>
            <div className="flex justify-center h-[70%]">
            
            <Routes>
                <Route path="/react" element={<React />} />
                <Route path="/angular" element={<Angular />} />
                <Route path="/vue" element={<Vue />} />
            </Routes>
                
            </div>
        </div>
    );
}

export default Technologies;