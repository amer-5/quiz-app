import fetchData from "./fetchData.ts";

interface UserData {
  email: string;
  password: string;
  username: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  token?: string;
  statusCode?: number;
}

const registerUser = async (
  email: string,
  password: string,
  username: string
): Promise<RegisterResponse> => {
  const userData: UserData = { email, password, username };

  try {
    const data = await fetchData({
      url: "https://quiz-be-zeta.vercel.app/auth/register",
      object: { method: "POST", body: JSON.stringify(userData) },
    });

    if (data?.message) {
      return {
        success: false,
        message: data.message,
      };
    }

    if (data?.token) {
      localStorage.setItem("token", data.token);
      return {
        success: true,
        message: "Uspešno ste se prijavili!",
        token: data.token,
      };
    } else {
      return {
        success: false,
        message: "Token nije pronađen u odgovoru.",
      };
    }
  } catch (error) {
    const message =
      typeof error === "string"
        ? error
        : "Došlo je do greške prilikom registracije.";

    return {
      success: false,
      message,
    };
  }
};

export default registerUser;
