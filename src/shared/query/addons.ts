export async function fetchAddonsByGroup(productGroup: string) {
  const res = await fetch(
    `http://localhost:3000/addonProducts?productGroup=${productGroup}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch addons");
  }
  return res.json();
}
