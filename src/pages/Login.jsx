import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Message from "../components/Message";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();
  const { login, isAuthenticated, error } = useAuth();

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  // console.log(isAuthenticated, email, password);

  // function letIn(e, email, password) {
  //   e.preventDefault();
  //   // console.log("chim", email, password);

  //   login(email, password);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  return (
    <main className={styles.login}>
      <PageNav />

      {error ? (
        // <div>
        //   <h1>{error}</h1>
        // </div>
        <Message message={error} />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            {/* <button onClick={(e) => letIn(e, email, password)}>Login</button> */}
            <Button type="primary">Login</Button>
          </div>
        </form>
      )}
    </main>
  );
}
