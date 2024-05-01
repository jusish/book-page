import Slider from "react-slick";
import Card2 from "./Card2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2
   
  };
  return (
      <div className=" justify-center">
        <Slider {...settings} className=" w-[90%] mx-[2%] flex gap-5">
        <div>
          <Card2 image={'/src/assets/Book Store/Product photo-3.png'}/>
        </div>
        <div>
          <Card2 image={'/src/assets/Book Store/Product photo-4.png'}/>
        </div>
        <div>
        <Card2 image={'/src/assets/Book Store/Product photo-2.png'}/>
        </div>
      </Slider>


      </div>  
  );
}

export default MultipleItems3;
