import React from 'react'
import '../styles/components/SearchBar.styl'

class SearchBar extends React.Component {

    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar-form">
                    <input className="SearchBar-input" type="text" onChange={this.onInputChange}>
                    </input>
                    <svg className="SearchBar-icon">
                        <use href="#icon-search"></use>
                    </svg>
                </form>
            </div>
        );
    }
}

export default SearchBar;