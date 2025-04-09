"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage({ propertyTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <BuildingOfficeIcon className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Property of Interest</p>
                    <p className="text-blue-100">{propertyTitle}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-blue-100">
                  Our team will get back to you within 24 hours regarding your
                  inquiry about{" "}
                  <span className="font-bold">{propertyTitle}</span>.
                </p>
                <p className="text-sm text-blue-100 mt-4">
                  Please fill out the form with your contact information so we
                  can reach out to you with more details about this property.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-3/5">
            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-full mb-4">
                  <svg
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-4">
                  We&apos;ve received your inquiry about {propertyTitle}. Our
                  team will contact you shortly.
                </p>
                <p className="text-blue-600 text-sm">
                  Redirecting to home page...
                </p>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Us About This Property
                </h1>
                <p className="text-gray-600 mb-8">
                  Please fill out the form below to inquire about{" "}
                  <span className="font-semibold">{propertyTitle}</span>.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PhoneIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder={`I'm interested in learning more about ${propertyTitle}...`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 
                        ${
                          isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
