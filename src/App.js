import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home"
import GalleryQuestions from "./GalleryQuestions"
import GeneralQuestions from "./GeneralQuestions"
import GalleryOne from "./GalleryOne"
import GalleryTwo from "./GalleryTwo"
import GeneralAnswer from "./GeneralAnswer"
import GalleryAnswer from "./GalleryAnswer"

import './App.css';


class App extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/generalQuestions" component={GeneralQuestions} />
                        <Route path="/galleryQuestions" component={GalleryQuestions} />
                        <Route path="/galleryOne" component={GalleryOne} />
                        <Route path="/galleryTwo" component={GalleryTwo} />
                        <Route path="/generalAnswer" component={GeneralAnswer} />
                        <Route path="/galleryAnswer" component={GalleryAnswer} />
                    </Switch>

                </Router>
            </div>
        )
    }
}

export default App;
