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
      url: "/api/login",
      object: { method: "POST", body: JSON.stringify(userData) },
    });

    if (data?.user?.token) {
      localStorage.setItem("token", data.user.token);
      return {
        success: true,
        message: "Uspešno ste se prijavili!",
        token: data.user.token,
      };
    } else {
      throw new Error("Token nije pronađen u odgovoru.");
    }
  } catch (error) {
    console.log(error);

    if (error instanceof Error && "statusCode" in error) {
      const statusCode = (error).statusCode;

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
