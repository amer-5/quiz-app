interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
}

interface Token {
  token: string;
}

const registerUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  username: string,
): Promise<{ success: boolean; message?: string }> => {
  const userData: UserData = {
    email,
    password,
    firstName,
    lastName,
    username,
  };

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Došlo je do greške prilikom registracije."
      );
    }

    
    const data = await response.json();
    console.log(data);

    

    return { success: true, message: "Uspešno ste se registrovali!" };
  } catch (error) {
    console.error("Došlo je do greške prilikom registracije:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Došlo je do greške.",
    };
  }
};

export default registerUser;