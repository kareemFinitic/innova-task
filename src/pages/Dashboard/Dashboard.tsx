import Upgrading from "../../components/Cards/Upgrading";
import Discover from "../../components/Cards/DiscoverCar";
import Reports from "../../components/Statistics/Statistics";
import Recommended from "../../components/Cards/RecommendedCar";
import Car1 from "../../assets/images/car1.svg";
import { useGetRecommendedQuery } from "../../redux/reducers/carsReducer";
import Loader from "../../ui/Shared/Loader";
import Errors from "../../ui/Error/Errors";
import UpgradingCardsData from "../../utlis/UpgradingCard";

const Dashboard: React.FC = () => {
  const upgradingCards = UpgradingCardsData();
  const { data: cars, error, isLoading } = useGetRecommendedQuery();
  if (isLoading) return <Loader />;
  if (error) return <Errors message="Error...." />;
  return (
    <div className="mt-5">
      <div className="flex-wrap grid ">
        <Reports />
      </div>

      <div className="flex mt-10 gap-2">
        <Discover />
        {upgradingCards.map((card, index) => (
          <Upgrading
            key={index}
            title={card.title}
            amount={card.amount}
            text={card.textOne}
            image={card.image}
            description={card.description}
            bgColor={card.bgColor}
            textColor="white"
          />
        ))}
      </div>

      <div className="flex my-10 gap-10 flex-wrap">
        {cars?.map((car, index) => (
          <Recommended
            key={index}
            title={car.title}
            percentageOfRecommended ={car.percentageOfRecommended}
            vistis={car.vistis}
            image={Car1}
            speed={car.speed}
            bgColor={car.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
