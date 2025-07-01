"use client";
import React, { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      {submitted && (
        <div className="alert alert-success mb-4">
          <span>Message sent!</span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 shadow-xl rounded-xl p-8 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="textarea textarea-bordered w-full"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <button type="submit" className="btn btn-primary w-full mt-2">
          Send
        </button>
      </form>
    </div>
  );
};
