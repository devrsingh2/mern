import React, { Component } from 'react';
import {
    Container,
    Button
} from '@material-ui/core';

import Header from './components/Layouts/Header';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Container>
                    <Button color="primary">button</Button>
                </Container>
            </div>
        );
    };
};

export default App;