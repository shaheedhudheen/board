import searchSVG from "../assets/search.svg";
import bellSVG from "../assets/bell.svg";
import profilePic from "../assets/profile.jpg";

const DashboardNav = () => {
  return (
    <div className="flex justify-between col-span-1  font-bold h-8 items-center  my-6">
      <p className="font-montserrat text-2xl">Dashboard</p>

      <div className="flex gap-6">
        <div className="flex">
          <input
            type="text"
            className="rounded-l-xl px-2 font-normal focus:outline-none "
            placeholder="Search..."
          />
          <button className="rounded-r-xl bg-white px-4">
            <img src={searchSVG} alt="" />
          </button>
        </div>
        <img src={bellSVG} alt="" />
        <img src={profilePic} className="w-8 rounded-full" />
      </div>
    </div>
  );
};

export default DashboardNav;
