import "./Auth.css"; 
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";


export default function LoginPage() {
  return (
    <div className="container">
      <div className="card">

        <div className="icon">
          <Calendar size={28} />
        </div>

        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">
          Sign in to your Leave Management account
        </p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="name@company.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="btn">Sign In</button>
        </form>

        <p className="footer">
          Don't have an account?{" "}
          <Link to="/register">Register now</Link>
        </p>

      </div>
    </div>
  );
}