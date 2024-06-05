import { useLoaderData } from "react-router-dom";
import AchieveCard from "../AchieveCard/AchieveCard";


const Achieve = () => {
    const achieves = useLoaderData()
    console.log(achieves);
    return (
      <div className="w-[90%] mx-auto">
        <h1 className="text-center md:text-3xl font-bold bg-green-500 text-white p-6 rounded-t-xl">
          Banglades Defence Sports Achievemenet
        </h1>
        <p className="text-center text-xl bg-gray-200 px-6 pb-6 rounded-b-xl font-semibold">
          In Bangladesh, the significance of defense in sports has been
          increasingly recognized across various disciplines. From cricket to
          football, defensive strategies play a crucial role in the nations
          sporting achievements. Cricket, the most popular sport in Bangladesh,
          showcases the importance of a strong defensive play. Bowlers like
          Mashrafe Mortaza and Mustafizur Rahman have made significant
          contributions to the national team through their defensive prowess,
          restricting opponents scoring and creating pressure. Additionally, the
          fielding unit s coordination and sharpness are vital in saving runs
          and making critical catches, often turning the tide in closely
          contested matches.
        </p>
        <div className="max-w-6xl mx-auto">
          {achieves.map((achieve) => (
            <AchieveCard key={achieve.id} achieve={achieve}></AchieveCard>
          ))}
        </div>
      </div>
    );
};

export default Achieve;