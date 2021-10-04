import React, {Component} from 'react';

class Dropdow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'bananas'};

        this.handleChange = 
            this.handleChange.bind(this);
        this.handleSubmit = 
            this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        this.setState({value: ev.target.value});
    }

    handleSubmit(ev) {
        alert('your favorite fruit is: ' + this.state.value);
        ev.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value}
                    onChange={this.handleChange}>
                        <option value="apple">apple</option>
                        <option value="pepper">pepper</option>
                        <option value="melons">melons</option>
                    </select>
                </label>
                <input type="submit" value="submit"/>
            </form>
            
        

        );
    }
}

export default Dropdow