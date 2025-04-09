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
    <div className="w-full p-4 md:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Available Apartments
      </h1>

      {data.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-lg text-gray-500 mt-4">
              No apartments found matching your filters.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Try changing or resetting your filters.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
          {data.map((apartment, i) => (
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Apartments;
