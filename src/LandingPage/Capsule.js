import React, { useEffect, useState } from "react";
import { fetchCapsules } from "../Service";
import CapsulesCard from "./Capsulecard";
import "./Capsule.css";



const Capsules = () => {
  const [capsulesData, setCapsulesData] = useState([]);
  useEffect(() => {
    const fetchCapsulesData = async () => {
      await fetchCapsules({ limit: 10, offset: 0 }).then((res) => {
        setCapsulesData(res);
      });
    };
    fetchCapsulesData();
  }, []);
  
  const renderCapsulesCards = capsulesData.map((record) => {
    return <CapsulesCard key={record.capsule_serial} data={record} />;
  });
  return (
    <>
    <div className="Header">
        <h1>Capsules By Space-X</h1>
    </div>
     <div className="m-5">
          <div className="grid-capsules">
            {renderCapsulesCards}
          </div>
        </div>
        </>
  );
};

export default Capsules;