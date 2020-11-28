import { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class ImageSlider extends Component {
    render() {
        let imageGallery = null;
        if (this.props.images) {
            const images = (this.props.images || []).map(img => {
                const lastSlashIndex = img.lastIndexOf('/');
                const imageName = img.substring(lastSlashIndex + 1);
                const imageDirectory = img.substring(0, lastSlashIndex);
                return {
                    original: img,
                    thumbnail: imageDirectory + '/thumbs/' + imageName
                };
            });
            imageGallery = [<ImageGallery  key={images[0]}  items={images} />];
        }
       
        return (
            <div style={{maxWidth: '70vw',  position: 'relative', left:'50%', transform:'translateX(-50%)'}}>
                
            {imageGallery}
            </div>
        );
    }
}

export default ImageSlider;