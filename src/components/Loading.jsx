import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] min-h-screen text-center">
      <h1 className="text-7xl font-bold flex items-center gap-2 text-gray-800">
        L
        <img
          src={logo}
          alt="Rotating Logo"
          className="w-20 h-20 animate-spin"
        />
        ading<span className="text-[#9F62F2]">...</span>
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        Please wait, preparing your experience
      </p>
    </div>
  );
};

export default Loading;
