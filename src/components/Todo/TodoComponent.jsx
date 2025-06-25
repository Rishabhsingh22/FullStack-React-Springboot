import { Field, Form, Formik } from "formik";
import moment from "moment";
import React, { Component } from "react";

class TodoComponent extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.params.id,
            description: 'Learn forms new1',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values){
        console.log(values)
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
                        >
                        {
                            (props) => (
                                <Form>
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