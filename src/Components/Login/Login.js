import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPi } from "../../Services/Services";

export default function Login() {
  const history = useNavigate();
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  async function submit(e) {
    e.preventDefault();
    if (data.username !== "" || data.password !== "") {
      await fetchAPi(data).then(function (response) {
        if (response.status === 200) {
          console.log(response.data.user.role)
          history("/Dashboard", { state: { id: response.data.role } });
          //esto de abajo no funciona y no se porque
        } else if (response.status === 401 || response.status === 403) {
          alert("Usuario y Contraseña invalidos");
        } else {
          alert("Error desconocido");
        }
      });
    } else {
      alert("Todos los campos son obligatorios");
    }
  }

  return (
    <div className="bg-white px-10 py-20 rounded-3xl boder-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Bienvenido de nuevo!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Bienvenido, por favor ingresa tu información.
      </p>
      <form>
        <div className="mt-8">
          <div>
            <label className="text-lg font-medium">Usuario</label>
            <input
              name="username"
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu usuario"
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-medium">Contraseña</label>
            <input
              name="password"
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Ingresa tu contraseña"
              onChange={onChange}
              required
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="m-2 font-medium text-base" htmlFor="remember">
                Recuerda mi contraseña
              </label>
            </div>
            <button className="font-medium text-base text-violet-500">
              Se me olvidó mi contraseña
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={submit}
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[.1.01] ease-in-out bg-violet-500 text-white text-lg font-bold py-3 rounded-xl"
            >
              Acceder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
