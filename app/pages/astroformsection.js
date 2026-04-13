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
    <section className="relative bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 text-white py-12 sm:py-20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* Left Content */}
          <div className="relative text-center md:text-left h-full">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
                Expert Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
                Confused About Life? <br />
                Get <span className="text-yellow-200">Expert Guidance</span>
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
                Ask your most pressing questions, and let our astrologers reveal the answers hidden in the stars!
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  100% Confidential
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Verified Astrologers
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  24/7 Available
                </div>
              </div>
            </div>

            <div className="relative md:absolute md:bottom-0 md:left-0">
              <img src="/images/confuse.png" alt="Astrologer Thinking" width={430} height={400} />
            </div>
          </div>

          {/* Right: Form Card */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-5 sm:p-8 rounded-2xl shadow-2xl w-full md:w-[560px] border border-white/20">
              <h3 className="text-2xl font-bold mb-1">Ask Your Question!</h3>
              <p className="text-sm text-gray-400 mb-6 pb-5 border-b border-gray-100">Fill in your details and our astrologers will get back to you.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Gender</label>
                  <select
                    name="gender"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all cursor-pointer"
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Place of Birth</label>
                    <input
                      type="text"
                      name="place"
                      placeholder="Enter city"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Your Question</label>
                  <textarea
                    name="question"
                    placeholder="What would you like to ask the stars?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 focus:bg-white transition-all resize-none"
                    rows={3}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-base cursor-pointer hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
                >
                  Submit Question
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
