import React from 'react';
import '../styles/components/LayoutHeader.styl'
import SearchBar from '../components/SearchBar'

class LayoutHeader extends React.Component {
    render() {
        return (
            <div className="LayoutHeader">
                <SearchBar></SearchBar>
            </div>
        );
    }
}

export default LayoutHeader;