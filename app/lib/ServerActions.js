"use server";
import { client } from "./sanityClient";

export async function getAll(filterParams) {
  try {
    let query = '*[_type == "apartment"';
    const params = {};

    if (filterParams) {
      const filters = [];

      if (filterParams.availability && filterParams.availability !== "all") {
        filters.push(`status == $availability`);
        params.availability = filterParams.availability;
      }

      if (filterParams.rooms && filterParams.rooms !== "all") {
        filters.push(`rooms == $rooms`);
        params.rooms = parseInt(filterParams.rooms, 10);
      }

      if (filters.length > 0) {
        query += ` && ${filters.join(" && ")}`;
      }
    }

    query += "]";

    if (filterParams?.price && filterParams.price !== "off") {
      query +=
        filterParams.price === "highest-to-lowest"
          ? " | order(price desc)"
          : " | order(price asc)";
    } else if (filterParams?.area && filterParams.area !== "off") {
      query +=
        filterParams.area === "highest-to-lowest"
          ? " | order(area desc)"
          : " | order(area asc)";
    }

    console.log("Query:", query);
    console.log("Params:", params);

    const posts = await client.fetch(query, params);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getById(id) {
  try {
    const query = `*[_type == "apartment" && _id == $id][0]`;
    const params = { id };
    const apartment = await client.fetch(query, params);
    if (!apartment) {
      throw new Error(`Apartment with ID ${id} not found`);
    }
    return apartment;
  } catch (error) {
    console.error(`Error fetching apartment with ID ${id}:`, error);
    throw new Error(`Failed to fetch apartment with ID ${id}`);
  }
}
