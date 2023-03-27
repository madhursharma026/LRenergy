import Carousel from 'react-bootstrap/Carousel';
import styles from "../../styles/CarouselSection.module.css";

function CarouselSection() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <div class={`${styles.bgOpacity1} ${styles.zoomInOutBox}`}>
          <div class={`${styles.content1}`}>
            <div className={`${styles.textCentered} text-center`}>
              <h1><b>HELPING YOU LEVERAGE</b></h1>
              <p><b>The Power of the Sun</b></p>
              <button type="button" class={`btn ${styles.btnStyle}`}>Get Started</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class={`${styles.bgOpacity2} ${styles.zoomInOutBox}`}>
          <div class={`${styles.content2}`}>
            <div className={`${styles.textCentered} text-center`}>
              <h1><b>GO GREEN</b></h1>
              <p><b>For all your energy needs</b></p>
              <button type="button" class={`btn ${styles.btnStyle}`}>Get Started</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class={`${styles.bgOpacity3} ${styles.zoomInOutBox}`}>
          <div class={`${styles.content3}`}>
            <div className={`${styles.textCentered} text-center`}>
              <h1><b>TOWARDS</b></h1>
              <p><b>a clean energy future</b></p>
              <button type="button" class={`btn ${styles.btnStyle}`}>Get Started</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class={`${styles.bgOpacity4} ${styles.zoomInOutBox}`}>
          <div class={`${styles.content4}`}>
            <div className={`${styles.textCentered} text-center`}>
              <h1><b>SWITCH</b></h1>
              <p><b>To renewable energy</b></p>
              <button type="button" class={`btn ${styles.btnStyle}`}>Get Started</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;