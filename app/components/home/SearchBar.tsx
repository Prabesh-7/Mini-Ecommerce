"use client";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  return (
    <form
      className="mb-4"
      onSubmit={(e) => {
        e.preventDefault();
        const value = (e.currentTarget.search as HTMLInputElement).value;
        onSearch(value);
      }}
    >
      <input
        name="search"
        placeholder="Search products..."
        className="border p-2 w-full rounded"
      />
    </form>
  );
}
