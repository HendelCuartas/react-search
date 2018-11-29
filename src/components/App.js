import React from 'react';
import { TweenMax, Power2 } from "gsap/all";
import LayoutHeader from '../components/LayoutHeader'
import '../styles/components/App.styl'

class App extends React.Component {
    constructor(props){
        super(props);
        // logo container
        this.title = null;
    }

    componentDidMount(){
        TweenMax.fromTo(this.title, 0.5, {opacity: 0, y: -40}, {opacity: 1, y: 0, ease: Power2.easeIn})
    }

    render() {
        return (
            <div className="App">
                <LayoutHeader></LayoutHeader>
                <div className="App-container">
                    <h1 ref={ h1 => this.title = h1 }>Hello there!</h1>
                </div>
            </div>
        );
    }
}

export default App;