import Link from "next/link";

export default function NavBar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Home */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Brand
            </Link>
          </div>

          {/* Linki - Desktop */}
          <ul className="hidden md:flex space-x-8">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
