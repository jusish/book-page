import MultipleItems from "./Slider";


const TopSellers = () => {
  return (
    <div className="flex flex-col justify-center text-start gap-10">
      <div className=" gap-5 flex flex-col justify-center">
        <h1>Top Sellers</h1>
        <div>
          <select name="Choose a genre" id="">
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
