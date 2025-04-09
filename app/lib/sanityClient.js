import urlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export const builder = urlBuilder(client);
