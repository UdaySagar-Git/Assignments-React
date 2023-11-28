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

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
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

const Home = () => {

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-700  homecss">
      <div className="flex flex-col gap-2 justify-center ">
        <h1 className="text-4xl font-bold text-center text-white mb-5">React Assignments</h1>
        <div>
          <a href="/assignment-1" target="_blank" ><button>Assignment-1</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-1" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-2" target="_blank" ><button>Assignment-2</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-2" target="_blank" ><button>Code</button></a>
        </div>

        <div>
          <a href="/assignment-3" target="_blank" ><button>Assignment-3</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-3" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-4-1" target="_blank" ><button>Assignment-4-1</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-4/1/" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-4-2" target="_blank" ><button>Assignment-4-2</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-4/2/" target="_blank" ><button>Code</button></a>
        </div>

        <div>
          <a href="/assignment-5" target="_blank" ><button>Assignment-5</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-5" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-6" target="_blank" ><button>Assignment-6</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-6" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-7-1" target="_blank" ><button>Assignment-7-1</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-7/1/" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-7-2" target="_blank" ><button>Assignment-7-2</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-7/2/" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-8" target="_blank" ><button>Assignment-8</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-8/" target="_blank" ><button>Code</button></a>
        </div>
        <div>
          <a href="/assignment-9" target="_blank" ><button>Assignment-9</button></a>
          <a href="https://github.com/UdaySagar-Git/Assignments-React/tree/main/src/assignments/assignment-9/" target="_blank" ><button>Code</button></a>
        </div>


      </div>
    </div>
  );
}

