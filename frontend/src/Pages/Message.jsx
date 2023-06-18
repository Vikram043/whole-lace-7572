import React from 'react';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    message: 'Hey, how are you?',
    timestamp: 'June 1, 2023 10:30 AM',
  },
  {
    id: 2,
    sender: 'Jane Smith',
    message: 'I\'m good, thanks! How about you?',
    timestamp: 'June 1, 2023 11:00 AM',
  },
  {
    id: 3,
    sender: 'John Doe',
    message: 'I\'m doing great as well. Did you finish the report?',
    timestamp: 'June 1, 2023 11:15 AM',
  }
];

const MessagePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Message Page</h1>

      <div className="max-w-md mx-auto">
        {messages.map((message) => (
          <div key={message.id} className="border p-4 mb-4">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">{message.sender}</span>
              <span className="text-gray-500 text-sm">{message.timestamp}</span>
            </div>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
