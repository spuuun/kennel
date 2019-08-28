import React, { Component } from 'react';

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./ancient-of-days.jpg')} alt="Beautiful Location" />
                    </picture>
                    <h3>Owner: <span className="card-ownerName">{this.props.owner.name}</span></h3>
                    <p>Breed: Human Owner</p>
                    <p>Phone: {this.props.owner.phone}</p>
                    <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>REMOVE</button>
                </div>
            </div>
        );
    }
}

export default OwnerCard;