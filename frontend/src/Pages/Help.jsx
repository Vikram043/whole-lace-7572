import React from 'react';

const AdminHelpSupportPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Help and Support</h1>

      <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="mb-4">
            <h3 className="font-bold">How do I reset my password?</h3>
            <p className="text-gray-600">To reset your password, go to the login page and click on the "Forgot password" link. Follow the instructions provided to reset your password.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Can I change my username?</h3>
            <p className="text-gray-600">Currently, the username cannot be changed. If you need to update your username, please contact our support team.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">How can I contact support?</h3>
            <p className="text-gray-600">You can contact our support team by sending an email to support@example.com or by calling our support hotline at 123-456-7890.</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Where can I find more help resources?</h3>
            <p className="text-gray-600">For more help and resources, please visit our website's Help Center section at example.com/help-center.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHelpSupportPage;
