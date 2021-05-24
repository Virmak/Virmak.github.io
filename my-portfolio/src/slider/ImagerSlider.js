import { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class ImageSlider extends Component {
  render() {
    return (
        <Carousel>
           {(this.props.images || []).map(img => {
            return (
              <div key={img}>
                <img src={img} />
                <p className="legend">Legend 1</p>
              </div>
            )
        })}
        </Carousel>
    );
}
}
export default ImageSlider;