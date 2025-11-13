import { useEffect, useState } from "react";
import HabitCard from "../components/HabitCard";
import Loading from "../components/Loading";
import { FaSearch } from "react-icons/fa";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  // fetch habits function
  const loadHabits = async (s, c) => {
    setLoading(true);
    const res = await fetch(
      `https://programming-hero-assignment-10.vercel.app/search?search=${s}&category=${c}`
    );
    const data = await res.json();
    setHabits(data);
    setLoading(false);
  };

  // first load
  useEffect(() => {
    loadHabits("", "");
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    loadHabits(value, category);
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">All Featured Habits</h2>
        <p className="text-lg text-muted-foreground">
          Discover popular habits that are transforming lives
        </p>
      </div>

      {/* Search + Category */}
      <div className="flex gap-3 justify-center mb-8 items-center">
        <FaSearch size={30} />
        <input
          type="search"
          placeholder="Search habits..."
          className="input border-2 border-blue-800 rounded-xl px-3"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {loading && <Loading />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard key={habit._id} habit={habit} />
        ))}
      </div>
    </section>
  );
};

export default PublicHabits;
