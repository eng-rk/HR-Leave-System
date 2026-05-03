import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles["main-login"]}>

        <div className={styles.icon}>
          <Calendar size={28} />
        </div>

        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.Spittle}>
          Sign in to your Leave Management account
        </p>

        <div className={styles["input-login"]}>
          <form>
            <div>
              <label>Email</label>
              <input type="email" placeholder="name@company.com" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
            
            <div className={styles["submit-login"]}>
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>

        <p className={styles["forgot-login"]}>
          Don't have an account?{" "}
          <span><Link to="/register">Register now</Link></span>
        </p>

      </div>
    </div>
  );
}
