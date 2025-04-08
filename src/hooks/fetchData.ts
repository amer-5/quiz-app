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
  try {
    const response = await fetch(url, {
      method: object?.method || "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...object?.headers,
      },
      body: object?.body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Došlo je greške");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Greška");
  }
};

export default fetchData;
