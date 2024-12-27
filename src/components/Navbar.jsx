import "../styles/navbar.css"
import { ModeToggle } from "./modeToggle";
import { useTheme } from "./themeProvider";

export default function Navbar() {
  return (
    <div className="fixed bg-background text-foreground w-full border z-[50]">
      <header className="myNavbar" >
        <img src="./logo.png" alt="Google Developer Logo" />
        <h3 className="text-foreground">GDG Progress Hub</h3>
        <div className="absolute right-5">
          <ModeToggle />
        </div>
      </header>
    </div>
  );
}