import { useEffect, useState } from "react";
import Cards from "../../layouts/Cards/Cards";
import Banner from "../Banner/Banner";



const Home = () => {
    const [militaries, setMilitaries] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
        .then(data => setMilitaries(data))
    },[])
    return (
      <div className="">
        <Banner></Banner>
        <h1  className="my-8 text-3xl font-bold text-center ">Military Display</h1>
        <div className="grid grid-cols-3  gap-8 w-[90%] mx-auto bg-gray-300 ">
          {militaries.map((military) => (
            <Cards key={military.id} military={military}></Cards>
          ))}
        </div>
      </div>
    );
};

export default Home;