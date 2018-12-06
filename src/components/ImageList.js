import React from 'react';
import TweenMax from 'gsap';
import '../styles/components/ImageList.styl';
import ImageCard from './ImageCard';

class ImageList extends React.Component {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    onClickImage(e) {
        this.props.onClickImageApp(e);
    }

    componentDidMount() {
        TweenMax.fromTo(this.listRef.current, 0.5, {opacity: 0, y: -40}, {opacity: 1, y: 0, ease: Power2.easeIn})
    }

    render() {
        if (this.props.images.length > 0) {
            this.imagesList = this.props.images.map((image) => {
                return (
                    <ImageCard
                        className="ImageList-item"
                        key={image.id}
                        image={image}
                        onClickImage={e => this.onClickImage(e)}
                    ></ImageCard>
                );
            });
        } else {
            const NoResults = () => {
                return (
                    <div style={{
                        textAlign: 'center',
                        position: 'absolute',
                        width: '100%',
                    }}>
                        <h1>No se encontraron resultados, intenta con otra palabra.</h1>
                    </div>
                );
            }
            this.imagesList = (<NoResults></NoResults>);
        }
        return (
            <div className="ImageList" ref={this.listRef}>
                {this.imagesList}
            </div>
        );
    }
}

export default ImageList;