import { Link } from "wouter";

const Menu = () => {
  return (
    <header>
      <h1>Mi Sitio web</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Registro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
