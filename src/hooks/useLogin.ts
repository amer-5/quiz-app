interface UserData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const userData: UserData = {
    email,
    password,
  };

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Došlo je do greške prilikom prijave."
      );
    }

    const data = response.json();

    if (data.user && data.user.token) {
      localStorage.setItem("token", data.user.token)
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
    return {
      success: false,
      message: error instanceof Error ? error.message : "Došlo je do greške.",
    };
  }
};

export default loginUser;
