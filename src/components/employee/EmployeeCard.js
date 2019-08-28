import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./Satan-Blake.jpg')} alt="Beautiful Location" />
                    </picture>
                    <h3>Employee: <span className="card-employeeName">{this.props.employee.name}</span></h3>
                    <p>Breed: {this.props.employee.job}</p>
                    <button type="button" onClick={() => this.props.fireEmployee(this.props.employee.id)}>FIRE</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;