import React from "react";

const Form = () => {
  return (
    <div>
      <form className="bg-gray-100 py-[2rem] px-[1rem] mt-[40px] md:w-[400px] lg:w-[750px] w-[300px] mx-auto md:mx-auto">
        <input
          type="text"
          placeholder="Github username"
          className="w-[500px] p-4 mr-4"
        />
        <button className="p-4 bg-purple-900 rounded-lg text-white font-bold">
          Add Profile Card
        </button>
      </form>
    </div>
  );
};

export default Form;
