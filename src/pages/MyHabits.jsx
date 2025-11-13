import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const MyHabits = () => {
  const { user } = use(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefecth] = useState(false);
  const navigate = useNavigate();
  // console.log(habits)

  useEffect(() => {
    if (user) {
      fetch(
        `https://programming-hero-assignment-10.vercel.app/my-habits?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setHabits(data);
          setLoading(false);
        });
    }
  }, [user]);

  //delet function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://programming-hero-assignment-10.vercel.app/habits/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // remove from UI
            setHabits((prev) => prev.filter((h) => h._id !== id));

            Swal.fire("Deleted!", "Your habit has been deleted.", "success");
          });
      }
    });
  };

  const handleMarkComplete = (id) => {
    fetch(
      `https://programming-hero-assignment-10.vercel.app/habits/${id}/complete`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Already completed today") {
          toast.error("Already completed today!");
          return;
        }

        toast.success("Marked as completed!");
        setRefecth(!refetch);

        {
          habits.map((habit) => navigate(`/Habit_Details_page/${habit._id}`));
        }

        // array_update
        setHabits((prev) =>
          prev.map((h) =>
            h._id.toString() === id.toString()
              ? {
                  ...h,
                  currentStreak: data.currentStreak,
                  completionHistory: data.completionHistory,
                }
              : h
          )
        );
      });
  };

  // for loading
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="lg:mx-10">
      <div className="w-full lg:max-w-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">My Habits</h1>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Current Streak</th>
                <th>Created Date</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Mark Complete</th>
              </tr>
            </thead>

            <tbody>
              {habits.map((habit) => (
                <tr key={habit._id} className="hover:bg-gray-100">
                  <td className="font-medium">{habit.title}</td>
                  <td>{habit.category}</td>
                  <td>{habit.currentStreak || 0} days</td>
                  <td>{new Date(habit.createdAt).toLocaleDateString()}</td>

                  {/* Update button */}
                  <td>
                    <Link
                      to={`/Updated_Habit_page/${habit._id}`}
                      className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                    >
                      ✏️ Update
                    </Link>
                  </td>

                  {/* Delete button */}
                  <td>
                    <button
                      onClick={() => handleDelete(habit._id)}
                      className="btn btn-sm bg-orange-500 text-white hover:bg-red-600"
                    >
                      ❌ Delete
                    </button>
                  </td>

                  {/* Mark Complete button */}
                  <td>
                    <button
                      onClick={() => handleMarkComplete(habit._id)}
                      className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                    >
                      ✅ Mark Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyHabits;
