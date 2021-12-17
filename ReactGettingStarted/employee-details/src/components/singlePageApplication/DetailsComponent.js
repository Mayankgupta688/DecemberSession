import Axios from 'axios';
import React from 'react';
import DetailsComponentEmployee from "./DetailsComponentEmployee";

export default class DetailsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            emp: null
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4000/employees/" + this.props.match.params.id).then((response) => {
            debugger;
            this.setState({
                emp: response.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.emp != null && <DetailsComponentEmployee emp={this.state.emp} getEventDetails={() => {}}></DetailsComponentEmployee>}
                {this.state.emp == null && <h1>No Details available</h1>}
            </div>
        )
    }
}