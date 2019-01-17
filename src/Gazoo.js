import React, { Component } from 'react';

class Gazoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            htmlVal: ''
        }
    }

    sanatizeInput = (input) => {
        return input.replace(/<.*?script|style=|class=/g, '');
    }

    handleOnChange = (e) => {
        let input = this.sanatizeInput(e.target.value);
        this.setState({
            inputVal: input,
            htmlVal: '<p>' + input.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>'
        });
    }

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