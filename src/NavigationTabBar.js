
import React from 'react';
import {
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import './NavigationTabBar.scss';

/**
 * NavigationTabBar component
 * Manage a navigation tab bar according props {routes} configuration.
 *  ! Use function instead React.Component to allow using Hooks - Functionnal Component architecture !
 *
 *  ! > All same level routes shall be managed by NavigationTabBar. Only child routes can be managed by child components.
 *
 * @param props.routes Array<{name: string, path: string, comp: React Comp, handledByNav: boolean}>
 * @returns {XML}
 * @constructor
 */
function NavigationTabBar(props) {
    let location = useLocation();

    // Determine if the Nav bar shall be displayed - By default not displayed
    let displayNav = false;
    props.routes.forEach((value) => {
       if (value.path === location.pathname && value.handledByNav === true)  {
           displayNav = true;
       }
    });

    return (
        <div className="navigation-tabbar">
            <nav className={displayNav ? '' : 'disabled'}>
                <ul>{renderLinks(props, location.pathname)}</ul>
            </nav>
            <Switch>
                {renderRoutes(props)}
            </Switch>
        </div>
    );
}

/**
 * This function render links for Router with NavigationTabBar features
 * @param props
 * @param currentPath string Current Route pathname
 * @returns {Array}
 */
function renderLinks(props, currentPath) {
    const linkBlocks = [];

    props.routes.forEach((value) => {
        // Add a React component to build a Link
        if (value.handledByNav === true) {
            linkBlocks.push(
                <li
                    key={'id-li-' + value.path}
                    className={currentPath === value.path ? 'selected' : ''}
                >
                    <Link to={value.path}>{value.name}</Link>
                </li>
            );
        }
    });
    return linkBlocks;
}

/**
 * This function render routes for Router
 * @param props
 * @returns {Array}
 */
function renderRoutes(props) {
    const routeBlocks = [];
    props.routes.forEach((value) => {
        // Add a React component to build each Route
        routeBlocks.push(<Route key={'id-route-' + value.path} path={value.path} >{value.comp}</Route>);
    });
    return routeBlocks;
}

export default NavigationTabBar;
