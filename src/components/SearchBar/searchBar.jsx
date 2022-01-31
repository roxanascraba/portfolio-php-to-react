import React, { useState, Component }  from 'react';
import './searchBar.css'

class SearchBar extends Component {
    state = { 
        value: ''
    };

    //const [searchValue, setSearchValue] = useState("the search value"); //deconstructing array
    
    handleImputChange = (event) => {
        //console.log(event.target.value);  
        this.setState({value : event.target.value}); // setSearchValue(event.target.value);
        console.log('state.value: ',this.state.value);
    };

    handleClear = () => {
        console.log('Button Clear clicked');
        this.setState({value : ''}); // clear out the search value
    }

    handleSearch = () => {
        console.log('Button Search clicked');
    }

    shouldDisplay = () => this.state.value.length > 0 ;

    render() { 
        let filteredListItems = [] = this.props.listItems.filter((item) => {
            return item.includes(this.state.value);
            });

        return (
          <div id="searchAbility"> 
            Try to find a particular ability that Roxana has: &nbsp; <input 
                type="text" 
                value={this.state.value} 
                onChange={this.handleImputChange} />&nbsp; 
            {this.shouldDisplay() && <button onClick={this.handleClear}> Clear</button> }
            
            {this.shouldDisplay() && filteredListItems.length > 0 &&
            <div id='listItems'> Yes, she worked with: &nbsp; 
                {filteredListItems.map((item) => {
                    return <span key={item}>{item} , </span>
                })}
            </div>}

            {this.shouldDisplay() && filteredListItems.length === 0 &&
            <div id='negativeAnswer'>No ability (like {this.state.value}) found.
                </div>}
          </div>


        );
    }
}
 
export default SearchBar;