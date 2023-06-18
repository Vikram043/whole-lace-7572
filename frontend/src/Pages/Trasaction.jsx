import React from 'react';

const transactions = [
  {
    id: 1,
    date: 'June 1, 2023',
    description: 'Grocery shopping',
    amount: 50.00,
  },
  {
    id: 2,
    date: 'June 3, 2023',
    description: 'Dinner at a restaurant',
    amount: 75.50,
  },
  {
    id: 3,
    date: 'June 5, 2023',
    description: 'Movie ticket',
    amount: 12.00,
  },
  {
    id: 4,
    date: 'June 7, 2023',
    description: 'Monthly utility bill',
    amount: 100.00,
  },
  {
    id: 5,
    date: 'June 10, 2023',
    description: 'Shopping for clothes',
    amount: 120.00,
  },
  {
    id: 6,
    date: 'June 12, 2023',
    description: 'Gasoline refill',
    amount: 40.00,
  },
  {
    id: 7,
    date: 'June 15, 2023',
    description: 'Gym membership fee',
    amount: 60.00,
  },
  {
    id: 8,
    date: 'June 18, 2023',
    description: 'Online book purchase',
    amount: 25.00,
  },
  {
    id: 9,
    date: 'June 20, 2023',
    description: 'Coffee with friends',
    amount: 8.50,
  },
  {
    id: 10,
    date: 'June 22, 2023',
    description: 'Mobile phone bill',
    amount: 45.00,
  },
];

const TransactionPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Transaction Page</h1>
      
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.description}</td>
              <td className="border px-4 py-2">${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionPage;
