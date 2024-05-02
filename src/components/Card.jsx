// eslint-disable-next-line react/prop-types
const Card = ({image}) => {
  return (
    <div className="flex flex-row gap-10 text-start">
      <img
        src={image}
        alt="Product 1"
      />
      <div className="flex flex-col gap-5">
        <h2 className=" font-medium text-[20px]">The Time has come</h2>
        <p className="text-[#e0e0e0] opacity-[52%] text-[14px]">
          Lindbergh Pharmacy is an Athens, Georgia, institution...
        </p>
        <div className="flex flex-row">
          <p>$ 27.89</p>
          <p>$ 30.99</p>
        </div>
        <button className="flex gap-4 bg-[#FFCE1A] justify-center text-[16px] content-center text-center px-5 w-[60%] py-2 items-center">
          <img
            src="/src/assets/Icon.svg"
            className=""
            alt=""
          />
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Card;
