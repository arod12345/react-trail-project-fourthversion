import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Card = ({
  document,
  handleDeleteDocument,
  handleUpdateDocument,
  button,
  index,
  num,
  width,
  height
}) => {
  return (
    <div
      className={`felx  flex-col bg-[#202a3f] w-[${width}] h-[${height}] justify-between items-center shadow-sm rounded-md p-4 text-white`}
    >
      <p className="flex justify-between">
        {document}
        {num
          ? <span className="px-2 h-6 bg-gray-700 rounded-md">
              {num}
            </span>
          : undefined}
      </p>
      {button &&
        <div className="flex mt-[2em] justify-between self-end">
          <button
            className="px-4 flex items-center py-2 border rounded-md"
            onClick={() => handleDeleteDocument(index)}
          >
            <FaTrash size={18} className="mr-3" />
            Delete
          </button>
          <button
            className="px-4 flex items-center py-2 border rounded-md"
            onClick={() =>
              handleUpdateDocument(index, prompt("Enter updated document"))}
          >
            <FaPen size={18} className="mr-3" />
            Update
          </button>
        </div>}
    </div>
  );
};

export default Card;
