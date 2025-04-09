import Apartments from "../components/Apartments";
import ApartmentSidebar from "../components/ApartmentSidebar";

export default function ApartmentsPage({ searchParams }) {
  return (
    <div className="flex h-screen">
      <ApartmentSidebar />
      <div className="flex-1 overflow-y-auto">
        <Apartments searchParams={searchParams} />
      </div>
    </div>
  );
}
