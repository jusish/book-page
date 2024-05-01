import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2
   
  };
  return (
      <div className=" justify-center">
        <Slider {...settings} className=" w-[90%] mx-[2%]">
        <div>
          <Card image={'/src/assets/Book Store/Product photo-3.png'}/>
        </div>
        <div>
          <Card image={'/src/assets/Book Store/Product photo-4.png'}/>
        </div>
        <div>
        <Card image={'/src/assets/Book Store/Product photo-2.png'}/>
        </div>
      </Slider>


      </div>  
  );
}

export default MultipleItems2;
