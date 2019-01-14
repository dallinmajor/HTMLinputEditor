import React, { Component } from 'react';

class Gazoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            htmlVal: ''
        }
    }

    handleCharater = (char) => {
        console.log(char)
        if (char === '>' || char === '<') {alert('Sorry but that character is not allowed')};

    }

    addBreakTag() {
        this.setState({
            htmlVal: this.state.htmlVal.splice(this.state.htmlVal.length - 5, 0, '<br/>')
        });
    }

    addPtag() {
        this.setState({
            htmlVal: this.state.htmlVal + '</p><p>'
        }) 
    }

    handleEnter = () => {
        let endCharater = this.state.htmlVal.charAt(this.state.htmlVal.length - 1);
        this.state.htmlVal.charAt(endCharater) === '>' ? this.addBreakTag() : this.addPtag();
    }

    handleBackspace = () => {

    }

    HTMLeditorListener = (event) => {
        console.log(event);
        event.preventDefault();
       
        switch(event.key) {
            case 'Enter':
                this.handleEnter();
            break;
            case 'Backspace': 
                this.handleBackspace();
            break;
            default:
                this.handleCharater(event.key)
        }
    }

    handleSubmit = () => {

    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Text Area</label>
                    <textarea className="form-control" onKeyDown={this.HTMLeditorListener} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
            </div>
        )
    };
};

export default Gazoo;