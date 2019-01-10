import React, { Component } from 'react';

class Gazoo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
            htmlVal: ''
        }
    }

    handleInputChange = () => {

    };

    handleSubmit = () => {

    };

    render() {
        return (
            <div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        )
    };
};

export default Gazoo;