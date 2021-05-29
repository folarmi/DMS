import { useState } from "react";
import { Link } from "react-router-dom";

import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import logo from "../assets/logo.svg";
import Banner from "../atoms/Banner";
import Input from "../atoms/Input";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="bg-ash pb-20">
      <div className="m-auto w-10/12">
        <div className="flex items-center mt-4">
          <img src={logo} alt="logo" className="mr-2" />
          <p className="font-bold text-xl">DMS</p>
        </div>
        <section className="flex ">
          <Banner />

          <div className="bg-white m-6 rounded-lg p-8" style={{ flex: "1" }}>
            <p className="font-bold text-2xl pb-2">You’re Welcome Back!</p>
            <p className="pb-10 text-sm">
              Enter the following information below
            </p>
            <form>
              <Input
                placeholder="Email Address"
                label="Email Address"
                type="email"
              />
              <div className="w-full relative">
                <i onClick={togglePasswordVisibility}>
                  <img
                    src={passwordShown ? eyeOpened : eyeClosed}
                    alt="visible"
                    className="w-6 absolute visibility mt-4"
                    style={{ marginLeft: "23rem", marginTop: ".6rem" }}
                  />
                </i>
                <Input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  label="Password"
                />
              </div>
              <p className="text-sm">
                By clicking "Next" you agree to our{" "}
                <span className="text-primary">
                  {" "}
                  Terms of Service,Privacy Policy,
                </span>{" "}
                and to receive marketing communications from Envoy.
              </p>
            </form>
            <div className="flex justify-between items-center w-full py-8">
              <p className="text-sm">
                Just joining us here?{" "}
                <Link to="/" className="text-primary">
                  Register Now
                </Link>
              </p>

              <Link to="/">
                <button className="text-white bg-primary rounded-lg py-4 px-6 font-bold text-sm">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Login };
