import './App.css';
// Assignments
import Assignment1 from './assignments/assignment-1/Parent';
import Assignment2 from './assignments/assignment-2/Parent';
import Assignment3 from './assignments/assignment-3/Parent';
import Assignment4_1 from './assignments/assignment-4/1/Parent';
import Assignment4_2 from './assignments/assignment-4/2/Parent';
import Assignment5 from './assignments/assignment-5/Parent';
import Assignment6 from './assignments/assignment-6/Parent';
import Assignment7_1 from './assignments/assignment-7/1/Parent';
import Assignment7_2 from './assignments/assignment-7/2/Parent';
import Assignment8 from './assignments/assignment-8/Parent';
import Assignment9 from './assignments/assignment-9/Parent';
import Assignment10 from './assignments/assignment-10/Parent'
import Assignment11 from './assignments/assignment-11/Parent'
import MiniProject from './assignments/mini-project/Parent';

import { Routes, Route, useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function App() {
  const { pathname } = useLocation();
  const assignmentsArray = [
    {
      name: "Assignment-1",
      link: "/assignment-1",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-2",
      link: "/assignment-2",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-2"
    },
    {
      name: "Assignment-3",
      link: "/assignment-3",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-3"
    },
    {
      name: "Assignment-4-1",
      link: "/assignment-4-1",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-4/1"
    },
    {
      name: "Assignment-4-2",
      link: "/assignment-4-2",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-4/2"
    },
    {
      name: "Assignment-5",
      link: "/assignment-5",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-5"
    },
    {
      name: "Assignment-6",
      link: "/assignment-6",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-6"
    },
    {
      name: "Assignment-7-1",
      link: "/assignment-7-1",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-7/1"
    },
    {
      name: "Assignment-7-2",
      link: "/assignment-7-2",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-7/2"
    },
    {
      name: "Assignment-8",
      link: "/assignment-8",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-8"
    },
    {
      name: "Assignment-9",
      link: "/assignment-9",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-9"
    },
    {
      name: "Assignment-10",
      link: "/assignment-10",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-10"
    },
    {
      name: "Assignment-11",
      link: "/assignment-11",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-11"
    },
    {
      name: "Mini-Project",
      link: "/mini-project",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/mini-project"
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-slate-600 gap-20 text-white h-[35px] sticky top-0 z-50">
        <h1 className="text-xl font-bold">You are currently in :<span className='px-2 py-1 mx-3 font-mono text-red-500 bg-black rounded-md'>{pathname}</span></h1>
        <Link to="/"><button className="px-4 py-1 text-white rounded-md bg-rose-600">Home</button></Link>
      </div>

      <Routes>
        <Route path="/" element={<Home assignmentsArray={assignmentsArray} />} />
        <Route path="/assignment-1" element={<Assignment1 />} />
        <Route path="/assignment-2" element={<Assignment2 />} />
        <Route path="/assignment-3" element={<Assignment3 />} />
        <Route path="/assignment-4-1" element={<Assignment4_1 />} />
        <Route path="/assignment-4-2" element={<Assignment4_2 />} />
        <Route path="/assignment-5" element={<Assignment5 />} />
        <Route path="/assignment-6" element={<Assignment6 />} />
        <Route path="/assignment-7-1" element={<Assignment7_1 />} />
        <Route path="/assignment-7-2" element={<Assignment7_2 />} />
        <Route path="/assignment-8" element={<Assignment8 />} />
        <Route path="/assignment-9/*" element={<Assignment9 />} />
        <Route path="/assignment-10/" element={<Assignment10 />} />
        <Route path="/assignment-11/" element={<Assignment11 />} />
        <Route path="/mini-project/*" element={<MiniProject />} />
      </Routes>

    </div>
  );
}
export default App;

import { Link } from 'react-router-dom';

const Home = ({ assignmentsArray }) => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700 homecss">
      <div className="flex flex-col justify-center gap-2 ">
        <h1 className="mb-5 text-4xl font-bold text-center text-white">React Assignments</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
          {assignmentsArray.map((assignment, index) => (
            <div key={index}>
              <Link to={assignment.link}><button>{assignment.name}</button></Link>
              <a href={assignment.code} target="_blank" className='relative'>
                <button> <span className='absolute left-5 top-[1px]'><FaGithub />  </span>Code</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

