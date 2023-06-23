import { NavLink } from "react-router-dom";
import dashboardSVG from "../assets/dashboard.svg";
import transactionSVG from "../assets/transaction.svg";
import schedulesSVG from "../assets/schedules.svg";
import userSVG from "../assets/user.svg";
import settingsSVG from "../assets/settings.svg";

const SideBar = () => {
  return (
    <>
      <div className="bg-black rounded-[30px] flex flex-col px-12 py-[60px] gap-16 col-span-1 row-span-4">
        <h1 className="text-white text-4xl font-bold font-montserrat">
          Board.
        </h1>

        <div className=" flex flex-col gap-10">
          <NavLink className="flex items-center gap-5">
            <img src={dashboardSVG} alt="" />
            <p className="text-white font-montserrat text-lg hover:font-bold">
              Dashboard
            </p>
          </NavLink>
          <NavLink className="flex items-center gap-5">
            <img src={transactionSVG} alt="" />
            <p className="text-white font-montserrat text-lg hover:font-bold">
              Transactions
            </p>
          </NavLink>
          <NavLink className="flex items-center gap-5">
            <img src={schedulesSVG} alt="" />
            <p className="text-white font-montserrat text-lg hover:font-bold">
              Schedules
            </p>
          </NavLink>
          <NavLink className="flex items-center gap-5">
            <img src={userSVG} alt="" />
            <p className="text-white font-montserrat text-lg hover:font-bold">
              Users
            </p>
          </NavLink>
          <NavLink className="flex items-center gap-5">
            <img src={settingsSVG} alt="" />
            <p className="text-white font-montserrat text-lg hover:font-bold">
              Settings
            </p>
          </NavLink>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-montserrat text-sm hover:font-bold">
            Help
          </p>
          <p className="text-white font-montserrat text-sm hover:font-bold">
            Contact
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
