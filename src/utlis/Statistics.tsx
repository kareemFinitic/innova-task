import statistics1 from "../assets/images/statistics1.svg";
import statistics2 from "../assets/images/statistics2.svg";
import statistics3 from "../assets/images/statistics3.svg";
import statistics4 from "../assets/images/statistics4.svg";
import statisticsPercentage1 from "../assets/images/pie chart.png";
import statisticsPercentage2 from "../assets/images/statisticspercentage2.svg";
import statisticsPercentage3 from "../assets/images/statisticspercentage3.svg";
import statisticsPercentage4 from "../assets/images/statisticspercentage4.svg";
 
const statistics = [
    {
      title: "Energy",
      icon: statistics1,
      graph: statisticsPercentage1,
      isActive: true
    },
    {
      title: "Range",
      icon: statistics2,
      graph: statisticsPercentage2,
      isActive: false
    },
    {
      title: "Break fluid",
      icon: statistics3,
      graph: statisticsPercentage3,
      isActive: false
    },
    {
      title: "Tire Wear",
      icon: statistics4,
      graph: statisticsPercentage4,
      isActive: false
    },
  ];
export default statistics