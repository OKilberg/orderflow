export function storeLocally(key: string, data: object) {
  const dataStringified = JSON.stringify(data);
  localStorage.setItem(key, dataStringified);
}

export function getLocally(key: string) {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function clearLocally(key: string) {
  localStorage.removeItem(key);
}
