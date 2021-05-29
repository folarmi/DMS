import { useState } from "react";
import { Link } from "react-router-dom";

import eyeClosed from "../assets/eyeClosed.svg";
import eyeOpened from "../assets/eyeOpen.svg";
import Banner from "../atoms/Banner";
import Input from "../atoms/Input";

const Landing = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div className="bg-ash p-4">
      <div className="m-auto w-10/12 ">
        <section className="flex">
          <Banner />

          <div className="bg-white m-6 rounded-lg p-8" style={{ flex: "1" }}>
            <p className="font-bold text-2xl pb-2">Basic Information</p>
            <p className="pb-10 text-sm">
              Enter the following information below
            </p>
            <form>
              <div className="flex mb-6 justify-between">
                <section className="rounded-md">
                  <div>
                    <div className="input-box border border-yellow-500">
                      <label className="text-xs text-primary label-text absolute">
                        Your company email
                      </label>
                      <input
                        className="p-2 outline-none w-full text-base"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="FZ Logistics"
                      />
                    </div>
                  </div>
                </section>

                <Input placeholder="Last Name" label="Last Name" type="text" />
              </div>
              <Input
                placeholder="Company Address"
                label="Company Address"
                type="text"
              />
              <Input
                placeholder="Phone Number"
                label="Phone Number"
                type="text"
              />
              <Input
                placeholder="Company Email Address"
                label="Company Email Address"
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
                Got an account? <span className="text-primary">Sign in</span>
              </p>
              <Link to="/login">
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

export { Landing };
