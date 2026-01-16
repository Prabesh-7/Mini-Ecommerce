import { endPoints } from "@/lib/endPoints";


export async function getCategories() {
  const url =endPoints.categories.get;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
  }

  return res.json(); 
}



