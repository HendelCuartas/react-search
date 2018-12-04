import React from 'react';
import '../styles/components/ImageList.styl';
import ImageCard from './ImageCard';

const ImageList = props => {
    const imagesList = props.images.map((image) => {
        return (
            <ImageCard className="ImageList-item" key={image.id} image={image}></ImageCard>
        );
    });
    return <div className="ImageList">{imagesList}</div>
};

export default ImageList;