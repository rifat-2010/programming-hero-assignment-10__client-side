import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const googlePovider = new GoogleAuthProvider();

const SignIn = () => {
  const [show, setShow] = useState(false);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  // SignIn function
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    // console.log({ email, password });

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // console.log(res);
        // setUser(res.user)
        toast.success("Signup successful");
        navigate(from);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // GoogleSignIn function
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googlePovider)
      .then(() => {
        // setUser(null);
        //   setUser(res.user)
        toast.success("GoogleSignIn successful");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-blue-800 relative overflow-hidden px-4">
      {/* page title */}
      <title>SignIn-Page</title>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-12 gap-6 items-stretch">
        {/* left: promo / brand panel (now visible on all sizes, sits above form on small screens) */}
        <div className="col-span-12 md:col-span-5 bg-white/6 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Welcome back</h3>
            <p className="text-sm text-white/80 mb-4">
              Sign in to continue building streaks and track your progress.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img src="/src/assets/habit-tracker.png" className="w-12 h-12 rounded-full" alt="" />
              <div>
                <div className="text-base font-semibold">Habit_Tracker</div>
                <div className="text-xs text-white/70">
                  Create. Track. Grow.
                </div>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Track daily habits easily</li>
              <li>• Build and maintain streaks</li>
              <li>• Share public habits with the community</li>
            </ul>
          </div>
          <div className="mt-6 hidden md:block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcQS-j2dCKPxFbjpuXXe-tIDKlax9hMPrmQ&s"
              alt="promo"
              className="w-full rounded-lg shadow-inner object-cover h-52"
            />
          </div>
        </div>

        {/* right: form panel (wider inputs & controls) */}
        <div className="col-span-12 md:col-span-7 bg-white/6 backdrop-blur rounded-2xl p-6 md:p-10 border border-white/8 shadow-2xl flex items-center">
          <form onSubmit={handleSignin} className="w-full space-y-6">
            <h2 className="text-3xl md:text-2xl font-semibold text-white text-center md:text-left">
              Log in to Habit_Tracker
            </h2>

            <div>
              <label className="block text-sm mb-2 text-white font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl px-5 py-3 bg-white/8 text-white placeholder-white/50 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-white font-medium">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                className="w-full rounded-xl px-5 py-3 bg-white/8 text-white placeholder-white/50 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-11 cursor-pointer z-50 text-white/90"
                aria-hidden
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <button // onClick={handleForgetPassword}
                className="text-sm text-white/80 hover:underline self-start"
                type="button"
              >
                Forgot password?
              </button>

              <button
                type="submit"
                className="common-btn border-white border-2"
              >
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-white/20 flex-1"></div>
              <span className="text-sm text-white/60">or</span>
              <div className="h-px bg-white/20 flex-1"></div>
            </div>

            {/* Google Signin */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-lg"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5 cursor-pointer"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-white/70 mt-1">
              Don’t have an account?{" "}
              <Link
                to="/signUp-page"
                className="text-indigo-300 hover:text-white underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
