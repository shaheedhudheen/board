import DashboardNav from "../components/DashboardNav";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 h-screen p-10 grid-rows-4">
      <SideBar />
      <DashboardNav />
    </div>
  );
};

export default Dashboard;
