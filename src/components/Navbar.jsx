import { ModeToggle } from "../components/mode-toggle";
import { ThemeProvider } from "../components/theme-provider";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="fixed w-full shadow-lg shadow-gray-500">
        <header className="myNavbar rounded-lg">
        <div className="flex-grow pr-4 text-left">
            </div>
            <img src="./logo.png" alt="Google Developer Logo" />
            <h3 className="text-black dark:text-white">GDG Progress Hub</h3>
            <div className="flex-grow pr-4 text-right">
              <ModeToggle />
            </div>
        </header>
      </div>
    </ThemeProvider>
  );
}