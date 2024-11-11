export const postCookies = async (cookie, quantity) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log("Registro exitoso");
      navigate("/login"); // Navegar a la página de inicio de sesión
    } else {
      const errorData = await response.json();
      console.error("Error en el registro:", errorData.message);
    }
  } catch (error) {
    console.error("Error de conexión:", error);
  }
};
