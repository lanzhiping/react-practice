const React = require('react');

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedImageIndex: 0,
            images: this.props.carousel,
            maxIndex: this.props.carousel.length - 1,
        };
    }

    handleArrowClick(e) {
        const deviation = e.target.className === 'carousel-left' ? (- 1) : (+ 1);
        let index = this.state.selectedImageIndex + deviation;
        index = Math.max(0, Math.min(this.state.maxIndex, index));

        this.setState({ selectedImageIndex: index });
    }

    createCarousel(image, index) {
        const selected = this.state.selectedImageIndex === index ? '-selected' : '';

        return (
            <a key={image.url} className={`carousel ${selected}`} href={image.href}>
                <img src={image.url} alt={image.url} />
            </a>
        );
    }

    render() {
        return (
            <div className="carousel_container">
                <div className="carousel-left" onClick={(e) => this.handleArrowClick(e)} />
                {this.state.images.map((im, i) => this.createCarousel(im, i))}
                <div className="carousel-right" onClick={(e) => this.handleArrowClick(e)} />
            </div>
        );
    }
}
module.exports = Carousel;
