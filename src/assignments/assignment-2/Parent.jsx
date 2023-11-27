import A from "./A";
import B from "./B";
import C from "./C";

const Parent = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-red-600 p-8 w-[60vw]">

        <h1 className="text-white">Parent Component</h1>

        <A />
        <B />
        <C />

      </div>
    </div>
  );
};

export default Parent;