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

import { Routes, Route, useLocation } from 'react-router-dom';

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
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-3",
      link: "/assignment-3",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-4-1",
      link: "/assignment-4-1",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-4-2",
      link: "/assignment-4-2",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-5",
      link: "/assignment-5",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-6",
      link: "/assignment-6",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-7-1",
      link: "/assignment-7-1",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-7-2",
      link: "/assignment-7-2",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-8",
      link: "/assignment-8",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
    {
      name: "Assignment-9",
      link: "/assignment-9",
      code: "https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1"
    },
  ]

  return (
    <div className="">
      <div className="flex justify-center items-center bg-slate-600 gap-20 text-white h-[35px] sticky top-0">
        <h1 className="text-xl font-bold">You are currently in :<span className='font-mono text-red-500 bg-black px-2 py-1 mx-3 rounded-md'>{pathname}</span></h1>
        <Link to="/"><button className="bg-rose-600 text-white px-4 py-1 rounded-md">Home</button></Link>
      </div>

      <Routes>
        <Route path="/" element={<Home assignmentsArray={assignmentsArray}/>} />
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
      </Routes>

    </div>
  );
}
export default App;

import { Link } from 'react-router-dom';

const Home = ({assignmentsArray}) => {

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-700  homecss">
      <div className="flex flex-col gap-2 justify-center ">
        <h1 className="text-4xl font-bold text-center text-white mb-5">React Assignments</h1>
        {assignmentsArray.map((assignment, index) => (
          <div key={index}>
            <Link to={assignment.link}><button>{assignment.name}</button></Link>
            <a href={assignment.code} target="_blank" ><button>Code</button></a>
          </div>
        ))}
      </div>
    </div>
  );
}

