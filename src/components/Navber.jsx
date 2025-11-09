import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { HashLoader } from "react-spinners";



const Navbar = () => {
const {user, setUser, loading} = useContext(AuthContext);
// console.log(loading, user);


// signOut function
const handleSignout = () => {
  signOut(auth)
    .then(() => {
      setUser(null); 
      toast.success("Sign Out successful");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

  return (
    <div className=" bg-slate-100 py-2.5 border-b border-b-slate-300 md:w-11/12 mx-auto w-full ">
      <div className="flex items-center justify-between mx-10">
        {/* mobile device row reverse and some gap */}
        <div className="flex flex-row-reverse gap-5 md:gap-10">
        <figure className="flex gap-2">
        <img src="https://img.freepik.com/premium-vector/habit-tracker-lettering-modern-hand-written-text-sticker-planner-bright-habit-tracker-text-planning-concept-vector-illustration_565728-508.jpg" alt="" className="w-12 h-12"/>
         <h1 className="text-2xl font-bold">RAndom name</h1>
        </figure>

      {/* mobile and md:device dropdown nav code */}
    <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul id="navUl"
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white left-0 rounded-box mt-3 w-52 p-2 shadow-md"
          >
            <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/Add_Habit'}>Add Habit</NavLink>
          </li>
          
            <li>
              <NavLink to={'/My_Habits'}>My Habits</NavLink>
            </li>
            <li>
              <NavLink to={'/Public_Habits'}>Public Habits</NavLink>
            </li>
           
          </ul>
        </div>
 </div>

        {/* lg device nav code */}
    <ul id="navUl" className="hidden md:hidden lg:flex  items-center gap-2 md:gap-5">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/Add_Habit'}>Add Habit</NavLink>
          </li>
          
            <li>
              <NavLink to={'/My_Habits'}>My Habits</NavLink>
            </li>
            <li>
              <NavLink to={'/Public_Habits'}>Public Habits</NavLink>
            </li>
    </ul>



    {loading ? <HashLoader color="red"/> : user ?

// dropdown menu option when user will be login
  <div className="text-center space-y-2 relative group">

    <img
        src={user?.photoURL || "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png"}
        className="h-12 w-12 rounded-full border-2 border-blue-600 object-cover cursor-pointer mx-auto"
        alt="user-photot"
    />

    <div className="dropdown menu w-72 rounded-box bg-white shadow-lg flex flex-col gap-3 p-4 absolute right-0 z-50 
        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">

        <h2 className="text-black text-xl font-semibold">{user?.displayName || 'No Name'}</h2>
        <p className=" font-black">{user?.email || 'No Email'}</p>

        <button onClick={handleSignout} className="my-btn bg-blue-500 text-white px-3 py-1 rounded">
            Sign Out
        </button>
    </div>
  </div>
        :
// Sign In button for when user will not be login
  <NavLink to={'/signIn-page'} className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-center">
            Login
    </NavLink>
 
}
   
      </div>
    </div>
)};

export default Navbar;