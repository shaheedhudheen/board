import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  //   Legend,
} from "chart.js";
import down from "../assets/bottom.svg"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "User",
        data: [200, 360, 150, 290, 200],
        backgroundColor: "#9BDD7C",
        borderColor: "#9BDD7C",
        cubicInterpolationMode: "monotone",
      },
      {
        label: "Guest",
        data: [350, 150, 300, 200, 430],
        backgroundColor: "#E9A0A0",
        borderColor: "#E9A0A0",
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    Plugins: {},
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        min: 100,
        max: 500,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100,
        },
      },
    },
  };
  return (
    <div className=" bg-white px-10 py-8 rounded-3xl flex flex-col gap-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-lg font-montserrat font-bold">Activities</h1>
          <p className="text-[#858585]">
            May - June 2021{" "}
            <span>
              <img src={down} alt="right arrow" className="inline" />
            </span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#9BDD7C]"></div>
            <p>User</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-[#E9A0A0]"></div>
            <p>Guest</p>
          </div>
        </div>
      </div>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
