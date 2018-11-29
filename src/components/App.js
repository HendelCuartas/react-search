import React from 'react';
import { TweenMax, Power2 } from "gsap/all";
import LayoutHeader from '../components/LayoutHeader'
import Background from '../components/Background'
import '../styles/components/App.styl'

class App extends React.Component {
    constructor(props){
        super(props);
        // logo container
        this.title = null;
    }

    componentDidMount(){
        //TweenMax.fromTo(this.title, 0.5, {opacity: 0, y: -40}, {opacity: 1, y: 0, ease: Power2.easeIn})
    }

    render() {
        return (
            <div className="App">
                <Background></Background>
                <div className="App-container">
                </div>
                <LayoutHeader></LayoutHeader>
            </div>
        );
    }
}

export default App;