import { use } from "react";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddHabit = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      imageUrl: e.target.thumbnail.value,
      createdAt: new Date(), // for making date instantly
      // downloads: 0,
      userEmail: user.email,                // created_by → userEmail
      // userName: user.displayName,           // যদি থাকে
      // creatorId: user.uid,                  // যদি থাকে
      // isPublic: true,                       // চাইলে default true
    };
    // console.log(formData);



    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/My_Habits");
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-10">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Habit</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Vehicles">Morning</option>
                <option value="Plants"> Work</option>
                <option value="Foods"> Fitness</option>
                <option value="Home & Living">Evening</option>
                <option value="Characters"> Study</option>
              </select>
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium">Thumbnail URL</label>
              <input
                type="url"
                name="thumbnail"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* user current login Email */}
            <div>
              <label className="label font-medium">User Current Email</label>
              <input
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
                value={user.email || "No Email"} // default value
                readOnly // user can't change
              />
            </div>

            {/* user current login Name*/}
            <div>
              <label className="label font-medium">User Current Name</label>
              <input
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter your new habit name"
                value={user.displayName || "No Name"} // default value
                readOnly // user can't change
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="common-btn w-full">
              Add Habit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
