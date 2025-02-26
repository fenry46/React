import React from "react";

const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-teal-100 min-h-screen items-center">
      <div className="flex gap-x-2.5">
        <Button variant="bg-red-300">Login</Button>
        <Button variant="bg-slate-500">Register</Button>
      </div>
    </div>
  );
}

export default App;
