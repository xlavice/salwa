"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setSubmitted(true); // Mengubah status form setelah submit
  }

  function handleClear() {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false); // Mengembalikan status form
  }

  if (submitted) {
    return (
      <section className="container mx-auto p-4 text-center">
        <h2>Khopunakhrab !</h2>
        <p>Nama: {name}, Email: {email}, Pesan: {message}</p>
        <p>Data yang sudah dimasukan akan segera diinput ke database. Khopunakhrab !</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-4 text-center">
      <h2>Hubungi Kami</h2>
      <form onSubmit={handleSubmit} className="text-left">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">Pesan:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}