import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/projects">Proiecte</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About ME</NavLink>
    </nav>
  );
}

export default Navbar;