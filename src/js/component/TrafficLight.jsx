import React from 'react';

export default class TrafficLight extends React.Component{
    
    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }
    
    render(){
        console.log(this.state);
        let redExtraClass = '';
        if(this.state.clickedLight == 'red') redExtraClass = 'selected';
        let yellowExtraClass = '';
        if(this.state.clickedLight == 'yellow') yellowExtraClass = 'selected';
        let greenExtraClass = '';
        if(this.state.clickedLight == 'green') greenExtraClass = 'selected';
        
        return <div>
            <div id="trafficTop"></div>
            <div id="container">
                <div className={"red light "+redExtraClass} onClick={() => this.setState({ clickedLight: 'red'})}></div>
                <div className={"yellow light "+yellowExtraClass} onClick={() => this.setState({ clickedLight: 'yellow'})}></div>
                <div className={"green light "+greenExtraClass} onClick={() => this.setState({ clickedLight: 'green'})}></div>
            </div>
        </div>;
    }
}