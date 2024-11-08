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
      <div className="login-box">
        <img src="./logo.png" alt="Google Developer Logo" />

        <h1 className="font-bold">Sign in</h1>
        <form onSubmit={handleLogin}>
          <select className="role-select" name="Team">
            <option value="">Select Team</option>
            <option value="Technical Team">Technical</option>
            <option value="Graphics Team">Graphics</option>
            <option value="Social Team">Social Media Management</option>
            <option value="Video Team">Video/Photograpgy</option>
            <option value="Content Team">Content</option>
            <option value="Sponsorship Team">Sponsorship Management</option>
            <option value="Event Team">Event Management</option>
            <option value="Community Team">Community</option>
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
