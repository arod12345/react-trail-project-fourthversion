import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaBaby, FaSearch } from "react-icons/fa";
import Card from "../components/Card";

// Function to preprocess a text by tokenizing, normalizing, removing stop words, and stemming
function preprocess(text) {
  const stopWords = [
    "is",
    "the",
    "this",
    "and",
    "are",
    "them",
    "they",
    "this",
    "their",
    "as",
    "in",
    "on",
    "by",
    "over",
    "out"
  ];

  return text
    .toLowerCase()
    .split(" ")
    .filter(word => !stopWords.includes(word));
}



const Home = () => {
  const [documents, setDocuments] = useState([
    "javascript is a web based programming language",
    "C++ is a basic programming language",
    "Amharic is one of the many languages spoken in ethiopia",
    "The best programming language according to google is java",
    "Netflix is a web based streaming gaint with milions of subscribers all over the world bulit using a the programming language javascript",
    "Amazon is one of the largest companies which uses AI in cloud computing on the web",
    "Mark Zuckerberg was an undergraduate at the university of Harvard in computer science before he dropped out to found facebook a web based social media app bulit by java and React",
    "swift is one of the more less known programming language",
    "English is internationally accepted as the language of the skies used by all airlines worldwide",
    "one of the famous javascript frameworks is React a flexible library developed by facebook entierly by javascript itself"
  ]);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const invertedIndex = createInvertedIndex(documents);

  function createInvertedIndex(documents) {
    const invertedIndex = {};

    documents.forEach((document, docId) => {
      const terms = preprocess(document);

      terms.forEach(term => {
        if (!invertedIndex[term]) {
          invertedIndex[term] = {
            df: 1,
            postings: [{ docId, tf: 1 }]
          };
        } else {
          const termInfo = invertedIndex[term];
          termInfo.df++;
          const posting = termInfo.postings.find(p => p.docId === docId);
          if (posting) {
            posting.tf++;
          } else {
            termInfo.postings.push({ docId, tf: 1 });
          }
        }
      });
    });
    return invertedIndex;
  }

  function getTermFrequency(term, docId, invertedIndex) {
    const termInfo = invertedIndex[term];
    if (termInfo) {
      const posting = termInfo.postings.find(p => p.docId === docId);
      return posting ? posting.tf : 0;
    }
    return 0;
  }

  function getDocumentFrequency(term, invertedIndex) {
    const termInfo = invertedIndex[term];
    return termInfo ? termInfo.df : 0;
  }

  function getCollectionFrequency(term, invertedIndex) {
    const termInfo = invertedIndex[term];
    if (termInfo) {
      return termInfo.postings.reduce((cf, posting) => cf + posting.tf, 0);
    }
    return 0;
  }

  function retrieveDocuments(query, invertedIndex) {
    const queryTerms = preprocess(query);

    const queryVector = {};
    queryTerms.forEach(term => {
      queryVector[term] = (queryVector[term] || 0) + 1;
    });

    const documentScores = {};
    Object.keys(queryVector).forEach(term => {
      const df = getDocumentFrequency(term, invertedIndex);
      const cf = getCollectionFrequency(term, invertedIndex);
      const idf = Math.log10(documents.length / (df + 1));


      invertedIndex[term].postings.forEach(posting => {
        const { docId } = posting;
        const tf = getTermFrequency(term, docId, invertedIndex);
        const tfidf = tf * idf;
        documentScores[docId] = (documentScores[docId] || 0) + tfidf;
      });
    });

    const rankedDocuments = Object.keys(documentScores).sort(
      (docId1, docId2) => documentScores[docId2] - documentScores[docId1]
    );
    return rankedDocuments;
  }
  const handleSearch = () => {
    const relevantDocuments = retrieveDocuments(query, invertedIndex);
    setSearchResults(relevantDocuments.map(docId => documents[docId]));
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mt-20">
          <input
            type="text"
            placeholder="Enter query to search your documents"
            className="w-[28em] py-3 indent-4 rounded-full shadow-xl"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="flex items-center px-6 py-3 cursor-pointer outline-none bg-[#5368df] rounded-lg font-bold text-white ml-8"
          >
            <FaSearch size={15} className="mr-3" />
            Search
          </button>
        </div>
        <div className="flex flex-col items-center p-2 text-white">
          <h2 className=" text-xl my-4 self-start">Search Results:</h2>
          <div className="grid grid-cols-1 w-[100%] gap-4 place-items-center">
            {searchResults.length
              ? searchResults.map((document, index) =>
                  <Card
                    key={index}
                    width={"80%"}
                    document={document}
                    num={index}
                    fmk={invertedIndex}
                  />
                )
              : <p className="text-red-500 flex flex-col mt-8  translate-x-[-2em]">
                  <FaBaby size={120} className="self-center my-4" />
                  NO DOCUMENTS WERE FOUND
                </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
