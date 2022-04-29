import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

function TopSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
        <>
            <Slider {...settings}>
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header3.png'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic2" src= {'assets/header4.jpg'}/>  
              </div >  
              <div className="wdt">  
              <img  className="img" alt="pic3" src= {'assets/header5.jpg'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic4" src= {'assets/header6.jpg'}/>  
              </div> 
            </Slider>
        </>        
    );
}

export default TopSlider;