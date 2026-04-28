import "./Auth.css";
import { Calendar } from "lucide-react";

 function RegisterPage() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <Calendar size={28} />
        </div>

        <h2 className="title">Create Account</h2>
        <p className="subtitle">Register for Leave Management System</p>

        <form>
          <div className="auth-input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="auth-input-group">
            <label>Email</label>
            <input type="email" placeholder="name@company.com" />
          </div>

          <div className="auth-input-group">
            <label>Role</label>
            <select>
              <option>Employee</option>
              <option>HR Manager</option>
            </select>
          </div>

          <div className="auth-input-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="auth-input-group">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          <button className="btn">Create Account</button>
        </form>

        <p className="footer">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
