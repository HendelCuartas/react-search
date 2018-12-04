import React from 'react';
import '../styles/components/ImageList.styl'

const ImageList = props => {
    const imagesList = props.images.map((image) => {
        return (
            <div className="ImageList-itemContainer">
                <img src={image.urls.regular}></img>
            </div>
        );
    });
    return <div className="ImageList">{imagesList}</div>
};

export default ImageList;