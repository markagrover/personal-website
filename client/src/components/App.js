import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from './scratch/cssComponent/cssComponent';

class App extends Component {
    componentDidMount(){
        this.props.fetchTestData();
    }
    render(){
        return (
            <div>
                Hello There.
                <a href="/api/data">Get Data</a>
                <Table />
            </div>
        );
    }

}

function mapStateToProps(state){

}

export default connect(null, actions)(App);