import React from 'react'
import '../styles/components/SearchBar.styl'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        return (
            <div className="SearchBar">
                <form className="SearchBar-form" onSubmit={e => this.onFormSubmit(e)}>
                    <input
                        className="SearchBar-input"
                        type="text"
                        value={ this.state.value }
                        onChange={ e => this.setState({ value: e.target.value }) }
                    ></input>
                    <svg className="SearchBar-icon">
                        <use href="#icon-search"></use>
                    </svg>
                </form>
            </div>
        );
    }
}

export default SearchBar;