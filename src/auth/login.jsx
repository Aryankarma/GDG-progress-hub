import { useNavigate } from "react-router-dom";
import { firebaseLogin } from "../services/FirebaseServices";
import { useTeam } from '../context/loginContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

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
      <div className="login-box bg-card border text-foreground p-6 shadow-md rounded-lg w-96">
        <img
          className="mx-auto mb-6 w-24 h-24"
          src="./logo.png"
          alt="Google Developer Logo"
        />

        <h1 className="text-xl font-bold text-center mb-4">Sign in</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Select name="Team">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Technical Team">Technical</SelectItem>
                <SelectItem value="Graphics Team">Graphics</SelectItem>
                <SelectItem value="Social Team">Social Media Management</SelectItem>
                <SelectItem value="Video Team">Video/Photography</SelectItem>
                <SelectItem value="Content Team">Content</SelectItem>
                <SelectItem value="Sponsorship Team">
                  Sponsorship Management
                </SelectItem>
                <SelectItem value="Event Team">Event Management</SelectItem>
                <SelectItem value="Community Team">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-muted border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full text-foreground hover:bg-accent bg-background font-semibold py-2 px-4 rounded-md hover:bg-primary-dark transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}