'use client';

import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";
import grainImage from "@assets/images/grain.jpg";
import { FormEvent } from "react";

export const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container" id="Contact">
        <div className="bg-gradient-to-r from-amber-300 to-orange-400 text-neutral-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-10 -z-10" style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
            <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
<p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.</p>

            </div>
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-neutral-950 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-full border border-gray-900"
                >
                  <span className="font-semibold">Send Message</span>
                  <ArrowUpRightIcon className="size-4"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
