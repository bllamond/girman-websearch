export async function fetchUserData(query) {
  const response = await fetch(`/api/users?query=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
