interface FetchObject {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

interface FetchParams {
  url: string;
  object?: FetchObject;
}

const fetchData = async ({ url, object }: FetchParams) => {
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    method: object?.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...object?.headers,
    },
    body: object?.body,
  });

  const data = await response.json();

  return data;
};

export default fetchData;
