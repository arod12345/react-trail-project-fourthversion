import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Form from "../components/Form";
import { FaPlus } from "react-icons/fa";

// Function to preprocess a text by tokenizing, normalizing, removing stop words, and stemming
const Documents = () => {
  const [documents, setDocuments] = useState([
    "javascript is a web based programming language",
    "C++ is a basic programming language",
    "Amharic is one of the many languages spoken in ethiopia",
    "The best programming language according to google is java",
    "Netflix is a web based streaming gaint with millons of subscribers all over the world bulit using a the programming language javascript",
    "Amazon is one of the largest companies which uses AI in cloud computing on the web",
    "Mark Zuckerberg was an undergraduate at the university of Harvard in computer science before he dropped out to found facebook a web based social media app bulit by java and React",
    "swift is one of the more less known programming language",
    "English is internationally accepted as the language of the skies used by all airlines worldwide",
    "one of the famous javascript frameworks is React a flexible javascript library developed by facebook entierly by javascript itself "
  ]);
  const [addDoc, setAddDoc] = useState(false);

  const handleVisible = () => {
    setAddDoc(prev => !prev);
  };

  const handleAddDocument = newDocument => {
    setDocuments(prevDocuments => [...prevDocuments, newDocument]);
  };

  const handleDeleteDocument = index => {
    setDocuments(prevDocuments => {
      const updatedDocuments = [...prevDocuments];
      updatedDocuments.splice(index, 1);
      return updatedDocuments;
    });
  };

  const handleUpdateDocument = (index, updatedDocument) => {
    setDocuments(prevDocuments => {
      const updatedDocuments = [...prevDocuments];
      updatedDocuments[index] = updatedDocument;
      return updatedDocuments;
    });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center w-[80%] justify-between mb-6 mt-20">
          <h1 className=" text-2xl text-white">Documents list</h1>
          <button
            onClick={handleVisible}
            className="px-12 py-3 flex items-center text-white font-bold bg-green-700 rounded-lg shadow-xl cursor-pointer"
          >
            <FaPlus size={15} className="mr-3" />
            Add Document
          </button>
          {addDoc &&
            <Form
              handleAddDocument={handleAddDocument}
              setDocuments={setDocuments}
              // newDocument={newDocument}
              handleVisible={handleVisible}
            />}
        </div>
        <div className="flex flex-col items-center p-2 text-white">
          <div className="grid grid-cols-3 w-[85%] gap-4 place-items-cente">
            {documents.map((document, index) =>
              <Card
                button={true}
                key={index}
                document={document}
                handleDeleteDocument={handleDeleteDocument}
                handleUpdateDocument={handleUpdateDocument}
                index={index}
                width={"20em"}
                height={"25em"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
