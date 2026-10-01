import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Practice", path: "/practice" },
    { name: "Lessons", path: "/lessons" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `
      relative py-5 text-sm font-medium transition-colors duration-200
      ${
        isActive
          ? "text-white"
          : "text-zinc-500 hover:text-white"
      }

      after:absolute
      after:bottom-0
      after:left-0
      after:h-[2px]
      after:bg-white
      after:transition-all
      after:duration-200

      ${
        isActive
          ? "after:w-full"
          : "after:w-0 hover:after:w-full"
      }
    `;

  const mobileLinkClass = ({ isActive }) =>
    `
      rounded-lg px-3 py-2.5 text-sm font-medium
      transition-all duration-200
      ${
        isActive
          ? "bg-white/10 text-white"
          : "text-zinc-400 hover:bg-white/5 hover:text-white"
      }
    `;

  return (
    <>
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-bold tracking-tight"
          >
            Typing
            <span className="text-zinc-500">
              Master
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden h-full items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={desktopLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">

            <Link
              to="/login"
              className="
                rounded-lg
                px-4
                py-2
                text-sm
                font-medium
                text-zinc-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              Login
            </Link>

            <Link
              to="/practice"
              className="
                rounded-lg
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-black
                transition
                hover:bg-zinc-200
                active:scale-95
              "
            >
              Start Typing
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              text-lg
              text-zinc-300
              transition
              hover:bg-white/5
              hover:text-white
              md:hidden
            "
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </nav>

        {/* Mobile Navigation */}
        <div
          className={`
            overflow-hidden
            border-t
            border-white/10
            bg-black/95
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="px-5 py-5">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

            {/* Mobile Actions */}
            <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  flex-1
                  rounded-lg
                  border
                  border-white/10
                  px-4
                  py-2.5
                  text-center
                  text-sm
                  font-medium
                  text-zinc-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                Login
              </Link>

              <Link
                to="/practice"
                onClick={() => setMenuOpen(false)}
                className="
                  flex-1
                  rounded-lg
                  bg-white
                  px-4
                  py-2.5
                  text-center
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-zinc-200
                  active:scale-95
                "
              >
                Start Typing
              </Link>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;