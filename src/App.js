import React from 'react';

const appStyle = {
    color: 'yellow',
    background: 'black',
    height: '250px',
    margin: '0px 20px',
    padding: '50px 20px',
    textAlign: 'center',
    width: '300px',
    border: '1px solid yellow',
}

const scrStyle = {
    color: 'yellow',
    background: 'black',
    padding: '10px 20px',
    margin: '10px 15px',
    width: 'auto',
    textAlign: 'right',
    border: '1px solid yellow',
}

const btnStyle = {
    background: 'yellow',
    border: '1px solid black',
    padding: '55px',
    margin: '10px',
    fontSize: '30px',
}


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.changeTemperP = this.changeTemperP.bind(this);
        this.changeTemperM = this.changeTemperM.bind(this);
        
        this.nt = { t: 20};
    }
    
    changeTemperP(){
        if(this.props.tem<26){
            this.props.updateData((this.props.tem+1))
        }else{
            console.log('+++');
        }
    }
    
    changeTemperM(){
        if(this.props.tem>16){
            this.props.updateData((this.props.tem-1))
        }else{
            console.log('---');
        }
    }
    
    render() {
        return(
            <>  
                <div>
                    <button style={btnStyle} onClick={ this.changeTemperM }><b>-</b></button>
                    <button style={btnStyle} onClick={ this.changeTemperP }><b>+</b></button>
                </div>
            </>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            temperature: 20,
        }
    }
    
    updateData = (value) => {
        this.setState({ temperature: value })
    }
    
    render() {
        return(
            <>
                <Message tem={this.state.temperature} />
                <div style={ appStyle }>
                    Current temperature: <b>{this.state.temperature} °C</b>
                    <Screen tem={this.state.temperature}/>
                    <Button tem={this.state.temperature} updateData={this.updateData}/>
                </div>
            </>
        );
    }
}

class Screen extends React.Component {
    render() {
        return(
            <>
                <div style={ scrStyle }>
                    {this.props.tem} °C
                </div>
            </>
        );
    }
}

class Message extends React.Component {
    render(){
        let n;
        let messageStyle = {
            display: 'hidden',
            width: '306px',
            margin: '113px 0 0 22px',
        }
        if(this.props.tem<=16 || this.props.tem>=26) {
           messageStyle = {
                border: '1px solid grey',
                background: 'grey',
                padding: '15px',
                width: '306px',
                color: 'darkred',
                fontWeight: 'bold',
                margin: '60px 0 0 22px',
            }
            if(this.props.tem<=16){
            n = 'too cold!';
            }else if(this.props.tem>=26){
            n = 'too hot!';
            }
        }
        return(
                <>
                    <div style={ messageStyle }>
                        {n}
                    </div>
                </>
        );
        
    }
}

export default App;
