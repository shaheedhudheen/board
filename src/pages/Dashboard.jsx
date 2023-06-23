import Chart from "../components/Chart";
import DashboardNav from "../components/DashboardNav";
import SideBar from "../components/SideBar";
import StatsCard from "../components/statsCard";
import Products from "../components/Products";
import Schedule from "../components/Schedule";


const Dashboard = () => {
  return (
    <div className="h-screen p-10 grid grid-cols-[300px_auto] bg-[#F5F5F5]">
      <SideBar />

      <div className="pl-10">
        <DashboardNav />
        <StatsCard />
        <Chart/>
        <div className="flex gap-16">
          <Products/>
          <Schedule/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
