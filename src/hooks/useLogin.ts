import fetchData from "./fetchData.ts";

interface UserData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  statusCode?: number;
}

const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const userData: UserData = { email, password };

  try {
    const data = await fetchData({
      url: "http://localhost:3000/auth/login",
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

export default loginUser;
