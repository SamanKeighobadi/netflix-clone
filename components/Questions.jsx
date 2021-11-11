import { useState } from "react";
import data from "./data/data.json";
import {} from 'react-icons'

const Questions = () => {
  const [questions] = useState(data);
  const [show, setShow] = useState(true);

  return (
    <div className="border-b-8 border-gray-700 bg-gray-900">
      <div className="text-center justify-center items-center flex flex-col   py-11">
        <h2 className="text-5xl font-bold text-white pb-6 ">
          Frequently Asked Questions
        </h2>

        {questions.map((question, index) => (
          <div
            key={index}
            className=" flex flex-col  px-6 bg-gray-700 w-6/12 py-5 mb-4 "
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-3xl text-white">{question.title}</h4>
              <span>&times;</span>
            </div>
            {show ? (
              <div className="text-justify text-white pt-2">
                <p className="text-xl">{question.body}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
