import right from "../assets/right.svg";

const Schedule = () => {
  return (
    <div className="my-6 bg-white rounded-2xl px-10 py-8 w-full h-64  flex flex-col gap-6">
        
      <div className="flex justify-between align-middle">
        <h1 className="font-montserrat font-bold text-lg">Today’s schedule</h1>
        <p className="text-[#858585] font-montserrat text-sm">
          See All{" "}
          <span>
            <img src={right} alt="right arrow" className="inline" />
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="border-l-[6px] border-l-[#9BDD7C] px-2 ">
          <p className="text-sm font-bold">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="text-[#858585] text-xs">14.00-15.00</p>
          <p className="text-[#858585] text-xs">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="border-l-[6px] border-l-[#6972C3] px-2 ">
          <p className="text-sm font-bold">Check operation at Giga Factory 1</p>
          <p className="text-[#858585] text-xs">18.00-20.00</p>
          <p className="text-[#858585] text-xs">at Central Jakarta </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
