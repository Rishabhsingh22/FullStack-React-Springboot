import React from "react";
import { useParams } from "react-router-dom";

// Higher order component - Component passed as paarameter
function WithParams(Component){
    function WitParamsProp(props){
        const params = useParams();
        return <Component {...props} params={params}/>;
    }

    WithParams.displayName = `WithParams(${Component.displayName || Component.name || 'Component'})`;

    return WitParamsProp
}
export default WithParams;