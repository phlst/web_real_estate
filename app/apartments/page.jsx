import { Suspense } from "react";
import Apartments from "../components/Apartments";
import ApartmentSidebar from "../components/ApartmentSidebar";

export default function ApartmentsPage({ searchParams }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        <div className="md:sticky md:top-0 md:h-screen">
          <ApartmentSidebar />
        </div>
        <main className="flex-1 md:overflow-y-auto">
          <Suspense fallback={<ApartmentsLoading />}>
            <Apartments searchParams={searchParams} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

function ApartmentsLoading() {
  return (
    <div className="container mx-auto p-4">
      <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse mb-6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden bg-white h-80"
          >
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
