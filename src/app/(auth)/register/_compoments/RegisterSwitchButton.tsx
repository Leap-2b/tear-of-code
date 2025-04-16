"use client"
import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";


export function RegisterSwitchButton() {
    const [authType, setAuthType] = useState<"login" | "register">("login");
    return (
      <div>
        <div>
          <button onClick={() => setAuthType("login")}>Login</button>
          <button onClick={() => setAuthType("register")}>Register</button>
        </div>
  
        <div style={{ marginTop: "20px" }}>
          {authType === "login" ? <Login /> : <Register />}
        </div>
      </div>
    );
  }