import React from 'react';
import axios from 'axios';
import LayoutHeader from '../components/LayoutHeader'
import Background from '../components/Background'
import ImageList from '../components/ImageList'
import '../styles/components/App.styl'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { result: [] }
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

    render() {
        return (
            <div className="App">
                <Background></Background>
                <div className="App-container">
                    <ImageList images={this.state.result}></ImageList>
                </div>
                <LayoutHeader onSubmitLayout={e => this.onSearchSubmit(e)}></LayoutHeader>
            </div>
        );
    }
}

export default App;