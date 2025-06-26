import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// Higher order component - Component passed as paarameter
function WithNavigationAndParams(Component){
    function WitNavAndParamProp(props){
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} navigate={navigate} params={params}/>;
    }

    WithNavigationAndParams.displayName = `WithNavigationAndParams(${Component.displayName || Component.name || 'Component'})`;

    return WitNavAndParamProp
}
export default WithNavigationAndParams;