import piePNG from "../assets/Pie.png";
import down from "../assets/bottom.svg";



const Products = () => {
  return (
    <div className="my-6 bg-white rounded-2xl px-10 py-8 gap-4 flex flex-col w-full">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold font-montserrat">Top Products</p>
        <p className="text-xs font-montserrat text-[#858585]">
          May - June 2021{" "}
          <span>
            <img src={down} alt="right arrow" className="inline" />
          </span>
        </p>
      </div>
      <div>
        <div className="flex justify-around items-center">
          <img src={piePNG} alt="pie graph" className="w-36" />

          <div className="flex flex-col gap-2">
            <div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#98D89E]" />
                <p className="text-sm font-montserrat font-bold"> Basic Tees</p>
              </div>
              <p className="px-4 text-xs text-[#858585]">55%</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#F6DC7D]" />
                <p className="text-sm font-montserrat font-bold">
                  Custom Short Pants
                </p>
              </div>
              <p className="px-4 text-xs text-[#858585]">31%</p>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#EE8484]" />
                <p className="text-sm font-montserrat font-bold">
                  Super Hoodies
                </p>
              </div>
              <p className="px-4 text-xs text-[#858585]">14%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
