// Project: ProtocolVisualizer Dashboard
// Description: A React frontend dashboard for inspecting and testing protocol communication using mock data

import React, { useState } from 'react';

export default function ProtocolVisualizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch(`/api/echo?message=${input}`, {
      headers: {
        Authorization: "Bearer abc123securetoken"
      }
    });
    const data = await res.json();
    setOutput(data.echo);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Protocol Visualizer</h1>
      <input
        type="text"
        placeholder="Enter message"
        className="border p-2 w-full mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-1 px-4 rounded"
      >
        Send
      </button>
      {output && (
        <div className="mt-4">
          <p className="text-gray-700">Response:</p>
          <div className="bg-gray-100 p-2 rounded mt-1">{output}</div>
        </div>
      )}
    </div>
  );
}

/*
README One-Liner:
ProtocolVisualizer is a React dashboard for interacting with protocol APIs in a human-friendly way, used for validating and visualizing secure endpoint responses.
*/
