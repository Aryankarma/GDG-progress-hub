import "../styles/navbar.css"

export default function Navbar() {
  return (
    <div className="fixed bg-white w-full shadow-md">
      <header className="myNavbar" >
        <img src="./logo.png" alt="Google Developer Logo" />
        <h3 className="text-slate-700">GDG Progress Hub</h3>
      </header>
    </div>
  );
}