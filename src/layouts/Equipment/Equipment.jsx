import { useEffect, useState } from "react";
import EquipmentDetails from "../EquipmentDetails/EquipmentDetails";


const Equipment = () => {
    const [equipments, setEquipments] = useState([])
    useEffect(() => {
        fetch("equipment.json")
            .then(res => res.json())
        .then(data => setEquipments(data))
    }, [])
    
    return (
      <div>
        <div>
          <h1 className="md:text-2xl font-bold text-center bg-gray-100 p-6 rounded-xl my-16">
            Equipment of Bangladesh Defence
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 w-[90%] mx-auto ">
          {equipments.map((equipment, index) => (
            <EquipmentDetails
              key={index}
              equipment={equipment}
            ></EquipmentDetails>
          ))}
        </div>
      </div>
    );
};

export default Equipment;