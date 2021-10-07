import React, {Component} from 'react';


class List extends React.Component{

    handleChange(e) {
        this.setState({text: e.target.value});
    }
    /** Just to see if anything was typed in */
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text.length === 0) {
            return;
        }
        const newItem = {
            /** saves the text to add to list */
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
       
    }
    constructor(props) {
        super(props);
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    
    

    render () {
        return (
            <div>
               <h3>Shopping List</h3>
               <TodoList items={this.state.items}/>
               <form onSubmit={this.handleSubmit}>
                   <label htmlFor="new-todo">
                       TO BUY
                   </label>
                   <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add {this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }
   
}


class TodoList extends React.Component {
    render() {
        return(
            <ol>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}<input type="checkbox"></input></li>
                ))}
            </ol>
        );
    }
}


export default List;