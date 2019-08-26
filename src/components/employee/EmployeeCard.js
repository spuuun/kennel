import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Employee: <span className="card-employeeName">Dood</span></h3>
                    <p>Breed: Human Worker</p>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;