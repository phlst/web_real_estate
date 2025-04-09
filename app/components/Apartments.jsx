import { getAll } from "../lib/ServerActions";
import ApartmentCard from "./ApartmentCard";

async function Apartments({ searchParams }) {
  const awaitedParams = await searchParams;
  const filterParams = awaitedParams
    ? {
        availability: awaitedParams.availability,
        price: awaitedParams.price,
        area: awaitedParams.area,
        rooms: awaitedParams.rooms,
      }
    : undefined;

  const data = await getAll(filterParams);

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4">
      {data.length === 0 ? (
        <div className="col-span-full flex justify-center items-center py-20">
          <p className="text-lg text-gray-500">
            No apartments found matching your filters.
          </p>
        </div>
      ) : (
        data.map((apartment, i) => (
          <ApartmentCard
            id={apartment._id}
            key={i + apartment.title}
            title={apartment.title}
            area={apartment.area}
            status={apartment.status}
            rooms={apartment.rooms}
            price={apartment.price}
            image={apartment.image}
          />
        ))
      )}
    </div>
  );
}

export default Apartments;
