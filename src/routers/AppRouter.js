import React from "react";
import {BrowserRouter, Route,Switch } from "react-router-dom";
const Hostory = require("history");

//local file imports


import Header from "./../components/Header";
import HomePage from './../components/HomePage';
import ContactPage from './../components/ContactPage';
import NotFound from "./../components/NotFound";
import PortfolioItemPage from './../components/PortfolioItemPAge';
import PortfolioPage from "./../components/PortfolioPage";


const AppRouter = () =>  (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path ="/contact" component={ContactPage} />
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter;

