'use client';

import { useState } from 'react';

export default function AstroFormSection() {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    dob: '',
    place: '',
    question: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
  };

  return (
    <section className="bg-orange-500 text-white pt-20 px-4">
      <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        
        {/* Left Content with Image + Bubbles */}
        <div className="relative text-center md:text-left h-full">
          <div className=''>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Confused About Life? Get Expert Guidance</h2>
          <p className="text-lg mb-6 max-w-md">Ask your most pressing questions, and let our astrologers reveal the answers hidden in the stars!</p>
          </div>
         

          <div className=" relative  md:absolute md:bottom-0 md:left-0">
            <img src="/images/confuse.png" alt="Astrologer Thinking" width={430} height={400} className=" " />
         </div>
         
        </div>






        {/* Right: Form Card */}
        <div className='pb-16'>
        <form onSubmit={handleSubmit} className="bg-white w-full md:w-[600px] text-black p-6 rounded-lg shadow-lg ">
          <h3 className="text-2xl font- border-b pb-4 mb-4">Ask Your Question!</h3>

        <label className='text-base'>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            className="w-full border border-gray-300 mb-4 rounded-lg  px-3 py-2"
            onChange={handleChange}
          />
 <label className=''>Select Gender</label>
          <select
            name="gender"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label className='text-base'>Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
            onChange={handleChange}
          />

<label className='text-base'>Date of place</label>
          <input
            type="text"
            name="place"
            placeholder="Enter Place of Birth"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
            onChange={handleChange}
          />


<label className='text-base'>Your question</label>
          <textarea
            name="question"
            placeholder="Enter your Question"
            className="w-full border border-gray-300 mb-4 rounded-lg px-3 py-2"
            rows={3}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-5 mb-4 rounded-lg hover:bg-orange-600 transition"
          >
            Submit Question →
          </button>
        </form>
        </div>
      </div>
      </div>
    </section>
  );
}
