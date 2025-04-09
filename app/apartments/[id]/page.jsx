import { notFound } from "next/navigation";
import { getById } from "@/app/lib/ServerActions";
import ApartmentPage from "@/app/components/ApartmentPage";
import { Suspense } from "react";

async function Page({ params }) {
  const paramsUse = await params;
  try {
    const apartment = await getById(paramsUse.id);

    if (!apartment) {
      return notFound();
    }

    return (
      <Suspense
        fallback={
          <div className="text-center py-10">Načítavajú sa detaily bytu...</div>
        }
      >
        <ApartmentPage data={apartment} />
      </Suspense>
    );
  } catch (error) {
    console.error("Error fetching apartment:", error);
    return (
      <div className="text-center py-10 text-red-500">
        Chyba pri načítavaní detailov bytu
      </div>
    );
  }
}

export default Page;
