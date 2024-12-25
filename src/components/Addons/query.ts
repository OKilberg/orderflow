export const fetchAddonsData = async () => {
  const data = await fetch("http://localhost:3000/addons", {
    cache: "no-cache",
    // cache: "no-store",
    next: { tags: ["addons"] },
  });

  return await data.json();
};
