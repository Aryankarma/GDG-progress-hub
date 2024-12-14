import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { firebaseLogin } from "../services/FirebaseServices";
import { useTeam } from '../context/loginContext';

export default function Login() {
  const { login } = useTeam();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()
    let form = e.target
    let team = form.Team.value 
    let password = form.password.value 
    const Login_status = await firebaseLogin(team,password);
    if(Login_status != null){
      login(Login_status)
      navigate("/admin");
    }else{
      alert("Wrong Credentials")
    }
  }

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="login-box bg-gray-700 dark:bg-gray-600">
        <img src="./logo.png" alt="Google Developer Logo" />

        <h1 className="font-bold  text-black dark:text-white">Sign in</h1>
        <form onSubmit={handleLogin} className="text-black dark:text-white">
          <select className="role-select bg-white dark:bg-gray-600" name="Team">
            <option value="" className="text-black dark:text-white">Select Team</option>
            <option value="Technical Team" className="text-black dark:text-white">Technical</option>
            <option value="Graphics Team" className="text-black dark:text-white">Graphics</option>
            <option value="Social Team" className="text-black dark:text-white">Social Media Management</option>
            <option value="Video Team" className="text-black dark:text-white">Video/Photograpgy</option>
            <option value="Content Team" className="text-black dark:text-white">Content</option>
            <option value="Sponsorship Team" className="text-black dark:text-white">Sponsorship Management</option>
            <option value="Event Team" className="text-black dark:text-white">Event Management</option>
            <option value="Community Team" className="text-black dark:text-white">Community</option>
          </select>

          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />

          <button type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
