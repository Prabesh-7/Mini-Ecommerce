import { endPoints } from "@/lib/endPoints";





export async function getProducts(){

    const url = `${endPoints.products.get}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  return res.json(); 


}




