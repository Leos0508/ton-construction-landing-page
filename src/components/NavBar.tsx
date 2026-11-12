import { Logo } from "./Logo";
import { StyledButton } from "./StyledButton";

const navLists = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <nav
      data-navbar
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur transition-transform duration-300 ease-out data-[hidden]:-translate-y-full"
    >
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-8">
        <Logo />
        <div>
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
      </div>
    </nav>
  );
}
