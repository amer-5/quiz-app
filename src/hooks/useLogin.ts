import fetchData from "./fetchData.ts";

interface UserData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
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
      url: "https://quiz-be-zeta.vercel.app/auth/login",
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
    }

    return {
      success: false,
      message: "Token nije pronađen u odgovoru.",
    };
  } catch (error) {
    const message =
      typeof error === "string" || typeof (error as any)?.message === "string"
        ? (error as any).message
        : "Došlo je do greške prilikom prijave.";

    return {
      success: false,
      message,
    };
  }
};

export default loginUser;
