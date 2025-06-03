import React, {Component} from "react";
import { Link } from "react-router-dom";

class Welcome extends Component{
    render(){
        return(
            <div>Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link></div>
        )
    }
}

export default Welcome;