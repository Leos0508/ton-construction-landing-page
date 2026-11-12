import { IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { StyledButton } from "./StyledButton";

const navLists = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <>
      <nav
        data-navbar
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur transition-transform duration-300 ease-out data-[hidden]:-translate-y-full"
      >
        <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 md:px-8">
          <a
            href="#"
            aria-label="TON Construction Group, back to top"
            className="hover:cursor-pointer"
          >
            <Logo />
          </a>

          <div className="hidden md:block">
            {navLists.map((navList) => (
              <StyledButton
                key={navList.name}
                href={navList.href}
                className="transition-opacity hover:opacity-60"
              >
                {navList.name}
              </StyledButton>
            ))}
          </div>

          <button
            type="button"
            data-nav-toggle
            aria-expanded="false"
            aria-controls="nav-sheet"
            aria-label="Open menu"
            className="group/burger inline-flex size-11 items-center justify-center border border-border md:hidden"
          >
            <IconMenu2
              size={22}
              stroke={1.5}
              aria-hidden="true"
              className="group-data-[open]/burger:hidden"
            />
            <IconX
              size={22}
              stroke={1.5}
              aria-hidden="true"
              className="hidden group-data-[open]/burger:block"
            />
          </button>
        </div>
      </nav>

      <div
        id="nav-sheet"
        data-nav-sheet
        className="pointer-events-none fixed inset-0 z-40 -translate-y-4 bg-background/70 opacity-0 backdrop-blur-xl transition-all duration-300 ease-out data-[open]:pointer-events-auto data-[open]:translate-y-0 data-[open]:opacity-100 md:hidden"
      >
        <div className="flex flex-col gap-1 px-4 pt-24">
          {navLists.map((navList) => (
            <StyledButton
              key={navList.name}
              href={navList.href}
              className="w-full justify-start border-b border-border/60 text-lg"
            >
              {navList.name}
            </StyledButton>
          ))}
        </div>
      </div>
    </>
  );
}
