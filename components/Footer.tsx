import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre Noosotros",
    link: "#",
  },
  {
    id: 2,
    name: "Productos",
    link: "#",
  },
  {
    id: 3,
    name: "Mi Cuenta",
    link: "#",
  },
  {
    id: 4,
    name: "Políticas de privacidad",
    link: "#",
  },
];

function Footer() {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">TitanDev</span>
            E-commerce
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400">
            {dataFooter.map((m) => (
              <li key={m.id}>
                <Link href={m.link} className="hover:underline me-4 md:me-6">{m.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      <Separator className="my-6 border border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2024

                <Link 
                href="#"
                >
                TitanDev
                </Link>

                Todos los derechos reservados
            </span>
      </div>

    </footer>
  );
}

export default Footer;
