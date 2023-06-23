import revenueSVG from "../assets/revenue.svg";
import transactionsSVG from "../assets/transactions.svg";
import likesSVG from "../assets/likes.svg";
import usersSVG from "../assets/users.svg";

const StatsCard = () => {
  return (
    <div className=" flex justify-between  my-6">
      <div className="w-72 h-36 bg-[#DDEFE0] rounded-3xl flex flex-col p-5">
        <img src={revenueSVG} alt="" className="h-6 self-end" />
        <p className="font-semibold">Total Revenue</p>
        <p className="text-2xl font-bold font-montserrat">$2,129,430</p>
      </div>
      <div className="w-72 h-36 bg-[#F4ECDD] rounded-3xl flex flex-col p-5">
        <img src={transactionsSVG} alt="" className="h-6 self-end" />
        <p className="font-semibold">Total Transactions</p>
        <p className="text-2xl font-bold font-montserrat">1,520</p>
      </div>
      <div className="w-72 h-36 bg-[#EFDADA] rounded-3xl flex flex-col p-5">
        <img src={likesSVG} alt="" className="h-6 self-end" />
        <p className="font-semibold">Total Likes</p>
        <p className="text-2xl font-bold font-montserrat">9,721</p>
      </div>
      <div className="w-72 h-36 bg-[#DEE0EF] rounded-3xl flex flex-col p-5">
        <img src={usersSVG} alt="" className="h-6 self-end" />
        <p className="font-semibold">Total Users</p>
        <p className="text-2xl font-bold font-montserrat">892</p>
      </div>
    </div>
  );
};

export default StatsCard;
