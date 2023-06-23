import searchSVG from "../assets/search.svg";
import bellSVG from '../assets/bell.svg'
import profilePic from '../assets/profile.jpg'

const DashboardNav = () => {
  return (
    <div className="flex justify-between col-span-4 py-3 px-6 font-bold items-start"> 

      <p className="font-montserrat text-2xl">Dashboard</p>

      <div className="flex gap-6">
        <div className="flex gap-6">
            <input type="text" />
            <button>
              <img src={searchSVG} alt="" />
            </button>
        </div>
        <img src={bellSVG} alt="" />
        <img src={profilePic} className="w-8 rounded-full"/>
      </div>
    </div>
  );
};

export default DashboardNav;
