import { useState } from "react";
import { CarProps } from "../../interfaces/interfaces";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Arrows from "../../assets/images/arrows-car.svg";
import vector from "../../assets/images/Vector.png";

const Car: React.FC<CarProps> = ({ title, image, type, drivingType, price, boughtNumber }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleFavorite = () => setIsActive((prev) => !prev);
  return (
    <div className="flex flex-col w-full max-w-96 bg-white shadow-md p-5 rounded-2xl cursor-pointer  h-72 py-7 px-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <div onClick={toggleFavorite} className="cursor-pointer">
          {isActive ? <FaHeart color="red" size={22} /> : <FaRegHeart size={22} />}
        </div>
      </div>
      <h5 className="text-[#72767C] font-normal">{type}</h5>
      <img src={image} className="w-full" alt={title} />
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-1 items-center">
          <img src={vector} alt="Person"/>
          <span className="text-[#72767C] font-medium mr-3">{boughtNumber}</span>
          <img src={Arrows} alt="Driving Type" />
          <span className="text-[#72767C] font-normal">{drivingType}</span>
        </div>
        <div className="text-[#72767C] font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default Car;
