import { Logo } from "./Logo";

const navLists = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav
      data-navbar
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur transition-transform duration-300 ease-out data-[hidden]:-translate-y-full"
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-8 py-4">
        <Logo />
        <div>
          {navLists.map((navList) => (
            <NavBarBtn key={navList.name} href={navList.href}>
              {navList.name}
            </NavBarBtn>
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavBarBtn({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex gap-8 px-3 py-1 uppercase text-lg hover:cursor-pointer"
    >
      {children}
    </a>
  );
}
