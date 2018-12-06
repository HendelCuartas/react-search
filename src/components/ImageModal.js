import React from 'react';
import '../styles/components/ImageModal.styl';
import { TweenMax } from 'gsap/all';

class ImageModal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const forwardRef = this.props.forwardRef;
        if (forwardRef && forwardRef.current) {
            TweenMax.set(forwardRef.current, {x: '-100%'});
        }
    }

    render() {
        const { onCloseClick, forwardRef } = this.props;
        return (
            <div
                className="ImageModal"
                ref={forwardRef}
            >
                <div
                    className="ImageModal-img"
                    style={{backgroundImage: `url(${this.props.imageClickedSrc})`}}
                    //style={{backgroundImage: "url(https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0MzUxfQ)"}}
                ></div>
                <div className="ImageModal-btn" onClick={onCloseClick}></div>
            </div>
        );
    }
}

export default ImageModal;
