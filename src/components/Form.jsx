import React from "react";
import { FaArrowCircleDown, FaArrowDown, FaChevronDown, FaClosedCaptioning, FaXing } from "react-icons/fa";

const Form = ({ handleAddDocument, setDocuments,handleVisible }) => {
  return (
    <div className="p-4 bg-[#0b1459] absolute flex flex-col translate-x-[50em] translate-y-36">
      <h2 className="text-white text-xl flex items-center">
        Add Document
        <FaChevronDown className="ml-12 cursor-pointer" onClick={handleVisible} />
      </h2>
      <input
        type="text"
        placeholder="Enter new document"
        className="rounded-lg px-4 py-2 my-8"
        onChange={e => setDocuments(e.target.value)}
      />
      <button
        className="px-4 py-2  bg-red-400"
        onClick={() => handleAddDocument()}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
