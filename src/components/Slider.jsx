import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2
   
  };
  return (

      <Slider {...settings} className=" w-[90%] mx-[2%]">
        <div>
          <Card image={'/src/assets/Book Store/Product photo.png'}/>
        </div>
        <div>
          <Card image={'/src/assets/Book Store/Product photo-1.png'}/>
        </div>
        <div>
        <Card image={'/src/assets/Book Store/Product photo-2.png'}/>
        </div>
      </Slider>
  
  );
}

export default MultipleItems;
