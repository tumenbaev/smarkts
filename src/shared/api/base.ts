export const baseFetch = (input: RequestInfo) => {
  return fetch(input).then((response) => {
    if (!response.ok) {
      throw new Error("Fetch failed: " + response.statusText);
    }
    return response.json();
  });
};
