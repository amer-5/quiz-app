import fetchData from "./fetchData.ts";

interface UserData {
  email: string;
  password: string;
  username: string;
}

interface RegisterResponse {
  success: boolean;
  message?: string;
  token?: string;
  statusCode?: number;
}

const registerUser = async (
  email: string,
  password: string,
  username: string
): Promise<RegisterResponse> => {
  const userData: UserData = {
    email,
    password,
    username,
  };

  try {
    const data = await fetchData({
      url: "http://localhost:3000/auth/register",
      object: { method: "POST", body: JSON.stringify(userData) },
    });

    if (data?.token) {
      localStorage.setItem("token", data.token);
      return {
        success: true,
        message: "Uspešno ste se prijavili!",
        token: data.token,
      };
    } else {
      throw new Error("Token nije pronađen u odgovoru.");
    }
  } catch (error) {
    if (error instanceof Error && "statusCode" in error) {
      const statusCode = error.statusCode;

      if (statusCode === 404) {
        return {
          success: false,
          message: "Korisnik sa ovom e-mail adresom nije pronađen.",
          statusCode,
        };
      } else if (statusCode === 401) {
        return {
          success: false,
          message: "Netačna lozinka. Pokušajte ponovo.",
          statusCode,
        };
      }
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : "Došlo je do greške.",
    };
  }
};

export default registerUser;
