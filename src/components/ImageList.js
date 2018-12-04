import React from 'react';
import '../styles/components/ImageList.styl'

const ImageList = props => {
    const imagesList = props.images.map((image) => {
        return (
            <img
                className="ImageList-item"
                src={image.urls.regular}
                key={image.id}
                alt={image.description}
            ></img>
        );
    });
    return <div className="ImageList">{imagesList}</div>
};

export default ImageList;