import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

 export class Main extends React.Component{
    render(){
        return (
            <div id="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}
