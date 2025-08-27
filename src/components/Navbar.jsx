import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar fluid className="fixed top-0 left-0 right-0 z-50 bg-slate-800 border-gray-700">
      <NavbarBrand as={Link} to="/">
        <img src="/react.svg" alt="GamersUnited" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Gaming Community
        </span>
      </NavbarBrand>
      
      <NavbarToggle />
      
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="text-white text-xl hover:text-blue-400 ">
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} to="/games" className="text-white text-xl hover:text-blue-400">
          Juegos
        </NavbarLink>
        <NavbarLink as={Link} to="/news" className="text-white text-xl hover:text-blue-400">
          Noticias
        </NavbarLink>
        <NavbarLink as={Link} to="/contact" className="text-white text-xl hover:text-blue-400">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}