import { useState } from "react";
import data from "./data/data.json";
import {FiPlus} from 'react-icons/fi';

const Questions = () => {
  const [questions] = useState(data);
  const [show, setShow] = useState(false);

  const showQuestionBody = () =>{
      setShow(prevState => !prevState)
  }

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
              <FiPlus onClick={showQuestionBody} className='text-white text-2xl cursor-pointer' />
            </div>
            {show ? (
              <div className="text-justify text-white pt-2">
                <p className="text-xl">{question.body}</p>
              </div>
            ) : null}
          </div>
        ))}

        <div>
            <p className='text-white text-lg pb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div> 
                <input type='text' placeholder='Email address ...' className='w-10/12 py-3 px-2' />
                <input type='button' value='get started' className='text-white bg-red-600 capitalize px-1 py-3' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
