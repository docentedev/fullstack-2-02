import { useState } from "react";
import Card from "../../components/card/Card";

interface LoginProps {
  handleFormSubmit: (form: { username: string; password: string }) => void;
}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.handleFormSubmit({
      username: username,
      password: password,
    });
  };

  const handleUsernameChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setUsername(value);
  };

  const handlePasswordChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setPassword(value);
  };
  return (
    <div>
      <Card title="Login">
        <form onSubmit={handleSubmit}>
          <label>
            Usuario
            <input value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button>Iniciar sesión</button>
        </form>
      </Card>
    </div>
  );
};
export default Login;
