import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import HelpComponent from './HelpComponent';
import AboutComponent from './AboutComponent';
import EmployeeComponent from './EmployeeComponent';
import DetailsComponent from './DetailsComponent';

export default class ContainerComponent extends React.Component {

    render() {
        return (
            <div>
                
                <HeaderComponent></HeaderComponent>
                <BrowserRouter>
                    <div>
                        <nav>
                            <Link style={{paddingRight: "15px"}} to="./">Employees</Link>
                            <Link style={{paddingRight: "15px"}} to="./home">Home</Link>
                            <Link style={{paddingRight: "15px"}} to="./help">Help</Link>
                            <Link style={{paddingRight: "15px"}} to="./about">About</Link>
                        </nav>
                        
                        <Route exact path="/" component={EmployeeComponent} />
                        <Route exact path="/home" component={HomeComponent} />
                        <Route exact path="/details/:id" component={DetailsComponent} />
                        <Route exact path="/help" component={HelpComponent} />
                        <Route exact path="/about" component={AboutComponent} />
                        <Route exact path="/about/:somedata/:otherData" component={AboutComponent} />
                    </div>
                </BrowserRouter>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}