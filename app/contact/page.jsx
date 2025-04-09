"use client";

import { useSearchParams } from "next/navigation";
import ContactPage from "../components/ContactPage";
import { Suspense } from "react";

export default function Contact() {
  const searchParams = useSearchParams();
  const propertyTitle =
    searchParams.get("property") || "Not Specified Property";

  return (
    <Suspense
      fallback={
        <div className=" py-10 text-center ">Loading contact form...</div>
      }
    >
      <ContactPage propertyTitle={propertyTitle} />
    </Suspense>
  );
}
