import { useState } from 'react'
// import PropTypes from "prop-types";


const ChatInput = ({ onSubmit }) => {

    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (question.trim() !== "") {
            onSubmit(question);
            setQuestion("");
        }
        
    }

    return (
      <div className="m-4 p-4">
        <form onSubmit={handleSubmit} className="flex w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg">
          <input
            type="text"
            name="userInput"
            id="question"
            className="flex-grow p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-full ml-2 font-semibold shadow-md transition duration-200 ease-in-out transform hover:scale-105">
            Send
          </button>
        </form>
      </div>
    );
};
// ChatInput.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ChatInput
