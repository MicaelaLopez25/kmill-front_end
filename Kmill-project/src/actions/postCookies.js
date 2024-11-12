const navigate = useNavigate(); // Inicializa el hook
    const [estado, setEstado] = useState("");
    const [usuario, setUsuario] = useState("");
    const [fecha, setFecha] = useState("");
    const [metodopago, setMetodopago] = useState(""); // Corrige el nombre de la variable
    const [pedido, setPedido] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const userData = {
        estado,
        usuario,
        fecha,
        metodopago,
        pedido, 
        producto,
        cantidad,
        precio
      };
  
      try {
        const response = await fetch("http://127.0.0.1:5000/pedidos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          console.log("Pedido exitoso");
          navigate("/login"); // Navegar a la página de inicio de sesión
        } else {
          const errorData = await response.json();
          console.error("Error en el pedido:", errorData.message);
        }
      } catch (error) {
        console.error("Error de conexión:", error);
      }
    };

