"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState, useEffect } from "react";

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

  const initialSubject = searchParams.get("subject") || "";
  const refId = searchParams.get("refId") || "";
  const property = searchParams.get("property") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: initialSubject,
    message: property ? `I'm interested in property ${property}.` : "",
    refId: refId,
    property: property,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  useEffect(() => {
    // Update form when URL parameters change
    setFormData((prev) => ({
      ...prev,
      subject: initialSubject,
      refId: refId,
      property: property,
      message: property
        ? `I'm interested in property ${property}.`
        : prev.message,
    }));
  }, [initialSubject, refId, property]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_FORM_API,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          property_id: formData.property || "",
          reference_id: formData.refId || "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Thank you for your message! We will get back to you soon.",
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          refId: "",
          property: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: "We couldn't send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {submitStatus.message && (
          <div
            className={`p-4 mb-6 rounded-md ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {submitStatus.message}
          </div>
        )}

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
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
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
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {formData.property && (
                <div className="mt-2 text-sm text-blue-600">
                  Reference: Property #{formData.property}
                </div>
              )}
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
                name="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
