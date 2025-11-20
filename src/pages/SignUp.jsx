import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import logo from "../assets/habit-tracker.png";
import Hi_Img from "../assets/signUp-hi-img.png";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

const googlePovider = new GoogleAuthProvider();

const SignUp = () => {
  const [show, setShow] = useState(false);

  const Navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    // console.log({ email, password, displayName, photoURL });

    // Regex for validation: at least 1 uppercase, 1 lowercase, min length 6
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter"
      );
      return;
    }

    // email && password function handler
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            // console.log(res);

            signOut(auth).then(() => {
              toast.success("Signup successful");
              // setUser(null);
              Navigate("/signIn-page");
            });
          })
          .catch((err) => {
            toast.error(err.message);
          });
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
        toast.success("GoogleSignIn successful");
        Navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-blue-800 relative overflow-hidden px-4 py-10">
      <title>SignUp-Page</title>


      <div className="w-full max-w-5xl mx-auto grid grid-cols-12 gap-6 items-stretch">
        {/* left promo panel */}
        <div className="col-span-12 md:col-span-5 bg-white/6 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Join Habit_Tracker</h3>
            <p className="text-sm text-white/80 mb-4">
              Create an account to start tracking habits, building streaks, and
              sharing progress.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <img src={logo} className="w-12 h-12 rounded-full" alt="habit_tracker-image" />
              <div>
                <div className="text-base font-semibold">Habit_Tracker</div>
                <div className="text-xs text-white/70">
                  Create. Track. Grow.
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-white/70">
              <li>• Simple daily habit tracking</li>
              <li>• Maintain streaks & reminders</li>
              <li>• Share and discover public habits</li>
            </ul>
          </div>

          <div className="mt-6">
            <img
              src={Hi_Img}
              alt="promo"
              className="w-full rounded-lg shadow-inner object-cover h-72"
            />
          </div>
        </div>

        {/* right: signup form */}
        <div className="col-span-12 md:col-span-7 bg-white/6 backdrop-blur rounded-2xl p-6 md:p-10 border border-white/8 shadow-2xl flex items-center">
          <form onSubmit={handleSignup} className="w-full space-y-6">
            <h2 className="text-3xl md:text-2xl font-semibold text-white text-center md:text-left">
              Create your account
            </h2>

            <div>
              <label className="block text-sm mb-2 text-white font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-xl px-5 py-3 bg-white/8 text-white placeholder-white/50 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-white font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@email.com"
                className="w-full rounded-xl px-5 py-3 bg-white/8 text-white placeholder-white/50 border border-white/8 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-white font-medium">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Your photo URL here"
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
              <div></div>
              <button
                type="submit"
                className="common-btn border-white border-2"
              >
                Sign Up
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-white/20 flex-1"></div>
              <span className="text-sm text-white/60">or</span>
              <div className="h-px bg-white/20 flex-1"></div>
            </div>

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
              Already have an account?{" "}
              <Link
                to="/signIn-page"
                className="text-indigo-300 hover:text-white underline cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
