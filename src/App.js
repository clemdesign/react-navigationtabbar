import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import './App.scss';
import NavigationTabBar from './NavigationTabBar';

function App() {
    const tabBarRoutes = [
        {
            name: 'Yellow',         // Name of Tabbar
            path: '/yellow',        // Pathname of Tabbar
            comp: <Yellow />,       // React component to enable
            handledByNav: true      // If true, route is managed by a TabBar button. Otherwise, route will be managed by component.
        },
        {
            name: 'Red',
            path: '/red',
            comp: <Red />,
            handledByNav: true
        },
        {
            name: 'Green',
            path: '/green',
            comp: <Green />,
            handledByNav: true
        },
        {
            name: 'Home',
            path: '/',
            comp: <Home />,
            handledByNav: false
        }
    ];

    return (
        <Router>
            <NavigationTabBar routes={tabBarRoutes}/>
        </Router>
    );
}

/**
 * The following component can be managed by a separated files but for convenience and get time, managed here.
 */

/**
 * Home Page UI
 * @returns {XML}
 * @constructor
 */
function Home() {
    return <div className="home"><Link to="/yellow">Enter</Link></div>;
}

/**
 * Yellow Page UI
 * @returns {XML}
 * @constructor
 */
function Yellow() {
    return (
        <div className="main-list">
            <ul>
                <li>Lemon</li>
                <li>Bananas</li>
                <li>Apricot</li>
            </ul>
        </div>
    );
}

/**
 * Green Page UI
 * @returns {XML}
 * @constructor
 */
function Green() {
    return (
        <div className="main-list">
            <ul>
                <li>Pear</li>
                <li>Kiwi</li>
                <li>Avocado</li>
            </ul>
        </div>
    );
}

/**
 * Red Page
 * @returns {XML}
 * @constructor
 */
function Red() {
    return (
        <Switch>
            <Route path="/red/cherry">
                <Cherry />
            </Route>
            <Route path="/red">
                <div className="main-list">
                    <ul>
                        <li>Strawberry</li>
                        <li>Blueberry</li>
                        <li><Link to="/red/cherry">Cherry</Link></li>
                    </ul>
                </div>
            </Route>
        </Switch>
    );
}

/**
 * Cherry Page UI
 * @returns {XML}
 * @constructor
 */
function Cherry() {
    return (
        <div className="cherry">
            <h1>Welcome in the cherry world!</h1>
            <Link to="/red">Back</Link>
        </div>
    );
}

export default App;
