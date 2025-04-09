"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { Suspense } from "react";

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
}

function ContactSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="h-10 w-1/4 bg-gray-200 rounded-md animate-pulse mb-6"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse mb-3"></div>
            <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>

            <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse mb-3"></div>
            <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>

            <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse mb-3"></div>
            <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
          </div>

          <div>
            <div className="h-8 w-1/3 bg-gray-200 rounded-md animate-pulse mb-3"></div>
            <div className="h-32 w-full bg-gray-200 rounded-md animate-pulse mb-6"></div>
            <div className="h-12 w-1/3 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const subject = searchParams.get("subject") || "";
  const refId = searchParams.get("refId") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="What is this regarding?"
                defaultValue={subject}
                required
              />
              {refId && <input type="hidden" name="refId" value={refId} />}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
