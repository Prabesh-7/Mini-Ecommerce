
const BASE_URL = "https://fakeapi.net";

export async function getProducts(params: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}) {
  const query = new URLSearchParams({
    page: String(params.page ?? 1),
    limit: String(params.limit ?? 10),
    ...(params.search && { search: params.search }),
    ...(params.category && { category: params.category }),
  });

  const url = `${BASE_URL}/products?${query}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
  }

  return res.json(); 
}

export async function getCategories() {
  const url = `${BASE_URL}/products/categories`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`);
  }

  return res.json(); // returns { data: [...] }
}