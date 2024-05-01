import MultipleItems2 from "./Slider2";


const Recommended = () => {
  return (
    <div className="flex flex-col justify-start text-start gap-10 mt-20">
      <div className=" gap-5 flex flex-col">
        <h1>Recommended for you</h1>
      </div>

      <div>
        <MultipleItems2 />
      </div>
    </div>
  );
};

export default Recommended;
