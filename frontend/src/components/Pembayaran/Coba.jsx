import  { useState } from 'react';
import axios from 'axios';
import './tailwind.css';

const Coba = () => {
  const [name, setName] = useState('');
  const [order_id, setOrder_id] = useState('');
  const [total, setTotal] = useState('0');

  const process = async () => {
    const data = {
      name: name,
      order_id: order_id,
      total: total,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/payment/proses-transaksi", data, config);
      console.log(response);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mb-2 p-2 border"
      />
      <input
        type="text"
        value={order_id}
        onChange={(e) => setOrder_id(e.target.value)}
        placeholder="Order ID"
        className="mb-2 p-2 border"
      />
      <input
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        placeholder="Total"
        className="mb-2 p-2 border"
      />

      <button onClick={process} className="p-2 bg-blue-500 text-white">
        Proses
      </button>
    </div>
  );
};

export default Coba;
