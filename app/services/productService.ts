import { endPoints } from "@/lib/endPoints";

export async function getProducts(params: {
  page?: number;
  limit?: number;
  search?: string;
}) {



  const query = new URLSearchParams({
    page: String(params.page ?? 1),
    limit: String(params.limit ?? 10)
  });

    if (params.search) {
    query.append("search", params.search);
  }





  const url = `${endPoints.products.get}?${query}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  return res.json(); 
}







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




