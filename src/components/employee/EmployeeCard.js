import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee: <span className="card-employeeName">{this.props.employee.name}</span></h3>
                    <p>Breed: {this.props.employee.job}</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;