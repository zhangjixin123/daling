
require("./style/app.css");
require("./style/app.scss");

import RootComponent from "./scripts/components/RootComponent";
import MainComponent from './scripts/components/MainComponent';
import MyorderComponent from './scripts/components/MyorderComponent';
import SaleComponent from "./scripts/components/SaleComponent";
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={RootComponent}>
        <IndexRoute component={MainComponent}/>
        <Route path="main" component={MainComponent}></Route>
        <Route path="myOrder" component={MyorderComponent}></Route>
        <Route path="sale" component={SaleComponent}></Route>
    </Route>
</Router>
    
    ,document.getElementById("app"))