import { useState } from "react";
import background_banner from "/src/assets/background_banner.jpg";
import logo from "/src/assets/logo.png";
import { login, signup } from "../firebase";
import netflix_spinner from "/src/assets/netflix_spinner.gif";

export const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };
  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      {" "}
      <img className="w-15" src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div
      className="h-screen py-5 px-[8%]"
      style={{
        backgroundImage: `url(${background_banner})`,
      }}
    >
      <img src={logo} className="w-37" />
      <div className="w-full max-w-110 bg-[rgba(0,0,0,0.65)] rounded p-15 m-auto">
        <h1 className="text-3xl font-medium mb-7">{signState}</h1>
        <form>
          {" "}
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full h-12 text-white bg-[#333] my-3 mx-0 py4 px-5 border-0 outline-none rounded text-[16px] font-medium"
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full h-12 text-white bg-[#333] my-3 mx-0 py4 px-5 border-0 outline-none rounded text-[16px] font-medium"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full h-12 text-white bg-[#333] my-3 mx-0 py4 px-5 border-0 outline-none rounded text-[16px] font-medium"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="w-full border-0 outline-none p-4 bg-[#e50914] text-white font-medium rounded text-[16px] mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="flex align-center justify-between text-gray-500 font-[13px]">
            <div className="flex align-centre mt-1 gap-[5px]">
              <input className="h-4.5 w-4" type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p className="cursor-pointer">Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-gray-600  ">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => setSignState("Sign Up")}
                className="ml-1.5 font-medium cursor-pointer text-white"
              >
                Sign Up now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                className="ml-1.5 font-medium cursor-pointer text-white"
                onClick={() => setSignState("Sign In")}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
