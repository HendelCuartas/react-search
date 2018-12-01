import React from 'react';
import '../styles/components/LayoutHeader.styl'
import SearchBar from '../components/SearchBar'

class LayoutHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    onSearchSubmit(el) {
        this.props.onSubmitLayout(el)
    }

    render() {
        return (
            <div className="LayoutHeader">
                <SearchBar onSubmit={e => this.onSearchSubmit(e)}></SearchBar>
            </div>
        );
    }
}

export default LayoutHeader;