import React, {Component} from 'react';
import logo from "./shoppingcart.png";


class List extends React.Component{


    constructor() {
        super();
        this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }
    /** Just to see if anything was typed in */
    handleSubmit(event) {
        event.preventDefault();
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

    render () {
        return (
            <html>
            <header>
               <img src={logo}/>Shopping List<img src={logo}/>
            </header>
            <body>
               <h4>{this.state.items.length} Different Items on List</h4>
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
                <div>
                <button onClick={() => window.location.reload(false)}>CLEAR LIST</button>
                </div>
                <TodoList items={this.state.items}/>
                </body>
            
            </html>



        );
    }
   
}


class TodoList extends React.Component {
    render() {
        return(
            <ol>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}<input type="checkbox"></input><Button /></li>
                ))}
            </ol>
        );
    }
}

class ButtonClick extends React.Component {
    render () {
        let {title,action} = this.props
        return (
            <button onClick = {action}>{title}</button>
        );
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
          count: 1,
        };
      }
    
      incrementCount = () => {
        this.setState({
          count: this.state.count + 1
        });
      };
    
      decrementCount = () => {
          if (this.state.count === 1) {
              return;
          }
        this.setState({
          count: this.state.count - 1
        });
      };

    render() {
        let { count } = this.state;
        return (
                <button>
                <h4>{count}</h4>
                <ButtonClick title={"-"} action = {this.decrementCount} />
                <ButtonClick title={"+"} action = {this.incrementCount}/>
                </button>
        );
    }
}


export default List;