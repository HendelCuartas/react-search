import React from 'react';
import axios from 'axios';
import TweenMax from 'gsap';
import LayoutHeader from '../components/LayoutHeader';
import Background from '../components/Background';
import ImageList from '../components/ImageList';
import ImageModal from '../components/ImageModal';
import '../styles/components/App.styl'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { result: [], imageClickedSrc: '' };
        this.modalRef = React.createRef();
        // logo container
    }

    onSearchSubmit(el) {
        axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
                query: el
            },
            headers: {
                Authorization: 'Client-ID 7859f0f078cf5405a736cac583357ef91ab265f2e87b513d798b5ce451b41ff9'
            }
        }).then((response) => {
            this.setState({ result: response.data.results });
            console.log('result', this.state.result);
        });
    }

    onClickImageApp(e) {
        this.setState({ imageClickedSrc: e.target.src });
        TweenMax.fromTo(this.modalRef.current, 0.5, {x: '-100%'}, {x: '5%'});
    }

    closeModal() {
        TweenMax.fromTo(this.modalRef.current, 0.5, {x: '5%'}, {x: '115%'});
    }

    render() {
        return (
            <div className="App">
                <Background></Background>
                <div className="App-container">
                    <ImageList onClickImageApp={e => { this.onClickImageApp(e) }} images={this.state.result}></ImageList>
                </div>
                <LayoutHeader onSubmitLayout={e => this.onSearchSubmit(e)}></LayoutHeader>
                <ImageModal
                    imageClickedSrc={this.state.imageClickedSrc}
                    onCloseClick={e => this.closeModal()}
                    className="App-modal"
                    forwardRef={this.modalRef}
                ></ImageModal>
            </div>
        );
    }
}

export default App;