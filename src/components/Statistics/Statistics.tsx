import statisticsData from "../../utlis/Statistics";
const Statistics: React.FC = () => {
  return (
    <div className="flex-wrap grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-4">
      {statisticsData.map((stat, index) => (
        <div
          className={`flex flex-col  py-7 w-full max-w-96 px-14 justify-center items-center gap-5 rounded-2xl hover:bg-purple-500 ${stat.isActive ?  'bg-purple-500' : 'bg-white'}`}
          key={index}
        >
          <img src={stat.icon} alt={stat.title} className="w-10" />
          <div className="font-medium text-xl">{stat.title}</div>
          <img src={stat.graph} alt={stat.title} className="w-36" />
        </div>
      ))}
    </div>
  );
};

export default Statistics;
