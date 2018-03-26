import React, { Component } from 'react';
import Panel from './components/Layout/Panel.jsx';
import SummaryView from './views/Summary/SummaryView.jsx';
import DetailView from './views/Detail/DetailView.jsx';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            width: 0,
            height: 0
        };
    }

    /// https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&duration=DURATION&scope=SCOPE_STRING

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    async callApi() {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    
    render() {
        return (
            <div className="app">
                <Panel width="50%" >
                    <SummaryView />
                </Panel>
                <Panel width="50%" >
                    <DetailView />
                </Panel>
            </div>
        );
    }
}

export default App;
