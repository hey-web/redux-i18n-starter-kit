import React from 'react';

export default class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          closed: false
        };
    }

    plus => {
/*        this.setState(function(state){
            console.log(state);
            return {count: 2};
        });*/
    }

    minus => {
        /*this.setState(function(state){
            console.log(state);
            return {count: 0};
        });*/
    }

    render => {
        var count = this.state.count;
        return (<div>
            <button onClick={this.plus}>+</button>
            <button onClick={this.minus}>-</button>
            <label>{count}</label>
        </div>);
    }
}
