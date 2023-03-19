import Link from "next/link";
import Home from "../pages/home";
import utilCss from "./../styles/login.module.css";

import { login } from "./../pages/login";

export default function AuthHome({ children, allPostsData, login }) {
  return (
    <section>
      {login ? (
        <Home allPostsData={allPostsData}></Home>
      ) : (
        // <h1>
        //   Bilal
        //   {console.log(login)}
        // </h1>
        <section>
          <p>
            Please Login for You are Not! Sign up if you dont have any account
          </p>
          <button class="log">
            <Link href="login">Login</Link>
          </button>
          <button class="reg">
            {" "}
            <Link href="signup">Sign up </Link>
          </button>
        </section>
      )}
    </section>
  );
}
