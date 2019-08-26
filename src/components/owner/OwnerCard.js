import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Owner: <span className="card-ownerName">Ooodles</span></h3>
                    <p>Breed: Human Owner</p>
                </div>
            </div>
        );
    }
}

export default OwnerCard;