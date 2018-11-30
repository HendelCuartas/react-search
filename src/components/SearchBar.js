import React from 'react'
import { TweenMax, Power2 } from "gsap/all";
import '../styles/components/SearchBar.styl'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    inputOnFocus(e) {
        const searchBar = document.querySelector('.SearchBar')
        searchBar.classList.add('SearchBar-focused')
    }

    inputOnBlur(e) {
        const searchBar = document.querySelector('.SearchBar')
        searchBar.classList.remove('SearchBar-focused')
    }

    onInputChange(e) {
        this.setState({ value: e.target.value })
    }

    componentDidMount(){
        const bar = document.querySelector('.SearchBar');
        TweenMax.fromTo(bar, 0.5, {opacity: 0, y: -40}, {opacity: 1, y: 0, ease: Power2.easeIn})
    }

    render() {
        return (
            <div className="SearchBar" ref="SearchBar">
                <form className="SearchBar-form" onSubmit={e => this.onFormSubmit(e)}>
                    <input
                        className="SearchBar-input"
                        type="text"
                        value={ this.state.value }
                        onChange={ e => { this.onInputChange(e) } }
                        onFocus={e => { this.inputOnFocus(e) }}
                        onBlur={e => { this.inputOnBlur(e) }}
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