import MultipleItems from "./Slider";


const TopSellers = () => {
  return (
    <div className="flex flex-col justify-center gap-10 mx-10 text-start">
      <div className="flex flex-col justify-center gap-5 ">
        <h1 className="text-2xl font-semibold ">Top Sellers</h1>
        <div>
          <select name="Choose a genre" id="" className="px-3 justify-center items-center content-center border py-2 rounded-[5px]">
            <option value="value 1">Action</option>
            <option value="value 2">Romance</option>
            <option value="value 1">Thriller</option>
          </select>
        </div>
      </div>

      <div>
        <MultipleItems/>
      </div>
    </div>
  );
};

export default TopSellers;
