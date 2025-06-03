import React from "react";
import { useNavigate } from "react-router-dom";

// Higher order component - Component passed as paarameter
function WithNavigation(Component){
    function WitNavProp(props){
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate}/>;
    }

    WithNavigation.displayName = `WithNavigation(${Component.displayName || Component.name || 'Component'})`;

    return WitNavProp
}
export default WithNavigation;