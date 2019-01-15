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
        if (char === '>' || char === '<') {
            alert('Sorry but that character is not allowed')
        } else {
            this.setState({
                inputVal: this.state.inputVal + char
            })
        }

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

    handleOnChange = (e) => {
        console.log(this.state.inputVal.split(''));
        this.setState({
            inputVal: e.target.value,
            htmlVal: '<p>' + e.target.value.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>'
        });
    }

    handleSubmit = () => {

    };

    createMarkUp = () => {
        return {__html: this.state.htmlVal};
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Text Area</label>
                    <textarea className="form-control" value={this.state.inputVal} onChange={this.handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div dangerouslySetInnerHTML={this.createMarkUp()}/>
            </div>
        )
    };
};

export default Gazoo;