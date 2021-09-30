import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './Carousel.module.css'
import { carousels } from '../../data/data'


const Carousel = () => {
    const settings = {
        accessibility: true,
        dots: true,
        Infinity: true,
        speed: 800,
        autoplay: true,
        draggable: true,
        arrows: true,
        dotsClass: styles.my_dots,
    }

    return (
        <div className={styles.carousel_container}>
            <Slider {...settings} style={{width: '100%'}}>
                {carousels.map((carousel, index) => (
                    <div key={index.toString()} className={styles.images_container}>
                        <img src={carousel.path} className={styles.images} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel