import React from 'react';
import Car1 from "../../assets/images/car1.svg";
import { useCars } from "../../hooks/useCars";
import { useButtonCar } from "../../hooks/useButtonCar";
import Car from "../../components/Cards/Car";
import Loader from "../../ui/Shared/Loader";
import Errors from "../../ui/Error/Errors";
import { t } from 'i18next';

const Cars: React.FC = () => {
  const { cars, error, isLoading } = useCars();
  const { renderButton, dashboardIcon, settingsIcon } = useButtonCar();
  if (isLoading) return <Loader />;
  if (error) return <Errors message="Failed....." />;
  console.log("Dataaa", cars);
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-semibold">{t("cars.title")}</h2>
      <div className="flex mt-10 justify-between items-center">
        <div className="flex gap-5 items-center">
          {renderButton('new')}
          {renderButton('type')}
        </div>
        <div className="flex gap-3 items-center sm:pr-3">
          {dashboardIcon()}
          {settingsIcon()}
        </div>
      </div>
      <div className=" my-10 flex-wrap   grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-4 ">
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <Car
              key={index}
              title={car.title}
              boughtNumber={car.boughtNumber}
              drivingType={car.drivingType}
              image={Car1}
              price={car.price}
              type={car.type}
            />
          ))
        ) : (
          <h5>No Data available</h5>
        )}
      </div>
    </div>
  );
};

export default Cars;
