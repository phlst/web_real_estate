import { Suspense } from "react";
import Apartments from "../components/Apartments";
import ApartmentSidebar from "../components/ApartmentSidebar";

export default function ApartmentsPage({ searchParams }) {
  return (
    <div className="flex h-screen">
      <ApartmentSidebar />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<div>Loading apartments...</div>}>
          <Apartments searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
