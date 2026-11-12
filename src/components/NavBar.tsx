import { Logo } from "./Logo";

export default function NavBar() {
  return (
    <header
      data-navbar
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur transition-transform duration-300 ease-out data-[hidden]:-translate-y-full"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6">
        <a href="/" aria-label="Home" className="flex items-center">
          <Logo />
        </a>
        <span className="text-sm text-muted-foreground">Hello World</span>
      </div>
    </header>
  );
}
