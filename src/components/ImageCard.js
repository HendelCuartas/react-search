import React from 'react';
import '../styles/components/ImageCard.styl'

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render() {
        return (
            <div
                className="ImageCard"
                style={{ gridRowEnd: `span ${this.state.spans}` }}
                onClick={e => this.props.onClickImage(e)}
            >
                <img
                    src={this.props.image.urls.regular}
                    alt={this.props.image.description}
                    className="ImageCard-image"
                    ref={this.imageRef}
                />
            </div>
        );
    }
};

export default ImageCard;