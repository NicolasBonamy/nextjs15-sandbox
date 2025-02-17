"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={link.name}
            style={
              isActive
                ? { color: "blue", paddingRight: "1rem" }
                : {
                    color: "lightgrey",
                    paddingRight: "1rem",
                  }
            }
          >
            {link.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
