import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import TodoDataSrevice from "../../api/todo/TodoDataSrevice";

class TodoComponent extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUser();
        TodoDataSrevice.retrieveTodo(username, this.state.id)
            .then(response=>this.setState({
                description:response.data.description,
                targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }

    validate(values){
        // let errors = {description: "shoul have 4 characters"}
        let errors = {}
        // console.log("From validate - ",values)
        if(!values.description){
            errors.description = 'Enter a description'
        }else if(values.description.length<5){
            errors.description = "Enter atleast 5 character in description"
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = "Enter a valid target date"
        }

        return errors;
    }
    onSubmit(values){
        console.log("From submit - ",values)
        console.log("From submit - ",this.props)
        let username = AuthenticationService.getLoggedInUser();
        const {navigate} = this.props;
        TodoDataSrevice.updateTodo(username, this.state.id, {
            id:this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(()=> navigate('/todos'))
    }

    render(){
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;

        // destructuring
        let {description, targetDate} = this.state;
        return(
            // <div>Todo Component for id: {this.props.params.id}</div>
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                        >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Traget Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                                )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default TodoComponent;