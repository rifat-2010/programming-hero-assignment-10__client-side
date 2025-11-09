import { Link } from "react-router";

const HabitCard = ({ habit }) => {
  const { title, description, category, reminderTime, userName, imageUrl } = habit;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="h-48">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-6 space-y-3">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-2">{description}</p>

        {/* Reminder + Creator */}
        <p className="text-sm text-gray-500">Reminder: {reminderTime}</p>
        <p className="text-sm text-gray-500">By: {userName}</p>

        {/* Button */}
        <Link to={'/Habit_Details_page'} className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold cursor-pointer text-white transition duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-[1.02] block w-full text-center">

            View Habit
     
        </Link>
      </div>
    </div>
  );
};

export default HabitCard;
