import { useEffect, useState } from "react";
import Cards from "../../layouts/Cards/Cards";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";
import Equipment from "../../layouts/Equipment/Equipment";



const Home = () => {
    const [militaries, setMilitaries] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
        .then(data => setMilitaries(data))
    },[])
    return (
      <div className="">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home - Bangladesh Defence Portal</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Banner></Banner>
        <h1 className="my-8 text-3xl font-bold text-center ">
          Military Display
        </h1>
        <div className="grid md:grid-cols-3  gap-6 w-[90%] mx-auto  ">
          {militaries.map((military) => (
            <Cards key={military.id} military={military}></Cards>
          ))}
        </div>
        <div>
          <Equipment></Equipment>
        </div>
      </div>
    );
};

export default Home;