import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './location/LocationCard'
import LocationList from './location/LocationList'
// import EmployeeCard from './employee/EmployeeCard'
import OwnerCard from './owner/OwnerCard'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import AnimalDetail from './animal/AnimalDetail'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
                }} />
                <Route path="/owner" render={(props) => {
                    return <OwnerList />
                }} />
                <Route path="/employee" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/location" render={(props) => {
                    return <LocationCard />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews