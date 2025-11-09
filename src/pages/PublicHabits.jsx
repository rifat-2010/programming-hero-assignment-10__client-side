import { useLoaderData } from 'react-router';
import HabitCard from '../components/HabitCard';

const PublicHabits = () => {

const data = useLoaderData();
console.log(data);

    return (

        <div>
                {/* Featured Habits Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Habits
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover popular habits that are transforming lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {/* Habit Cards*/}
          {data.map(habit => <HabitCard key={habit._id} habit={habit}/>)}

        </div>
      </section>
        </div>
    );
};

export default PublicHabits;