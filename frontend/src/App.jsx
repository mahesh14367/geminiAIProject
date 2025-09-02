import { useState } from 'react'
import './App.css'
import ChatInput from './ChatInput'
import ChatResponse from './ChatResponse'
import {fetchChatResponse} from "./service/api.jsx";


function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const handleUserInput = async (question) => {
    setLoading(true);
    setResponse(null);
    // Here you can add logic to process the input, e.g., send it to an API
    try {
      console.log("User question:", question);
      const apiResponse= await fetchChatResponse(question);
      setResponse(apiResponse);

    } catch (error) {
      alert("Error occurred while processing user input:" + error);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div>
      <header className='bg-gray-800 p-4 text-center '>
        <h1 className='text-white text-2xl'> AI CHATBOT</h1>
      </header>

      <ChatInput onSubmit={handleUserInput} />

      {loading && <p className='text-center'>Loading...</p>}

      <ChatResponse response={response} />

    </div>
  )
}

export default App
