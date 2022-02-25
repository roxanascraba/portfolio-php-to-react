import React, { Component }  from 'react';
import '../css/style.css'

class SearchBar extends Component {
    state = { 
        value: ''
    };

    shouldDisplay = () => this.state.value.length > 0 ;

    render() { 
        let filteredListItems = [] = this.props.listItems.filter((item) => {
            return item.includes(this.state.value);
            });

        return (
          <div className="searchAbility"> 
          <div className="searchAbilityContainer"> 
            <div className="searchInputLabel">
                <label htmlFor="inputSearch">Try to find a particular ability that I have:</label> 
            </div>
            <div className="searchInputArea">
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={ (e) => this.setState({value : e.target.value.toUpperCase()})}
                    id="inputSearch" />&nbsp; 
                {this.shouldDisplay() && <button onClick={(e) => this.setState({value: ''})}> Clear</button> }
            </div>
            <div className="searchResults">
                {this.shouldDisplay() && filteredListItems.length > 0 &&
                <div className="searchResponse"> Yes, I worked with: &nbsp; 
                    {filteredListItems.map((item) => {
                        return <div className='searchResponseDiv' key={item}>{item} </div>
                    })}
                </div>}

                {this.shouldDisplay() && filteredListItems.length === 0 &&
                <div className='negativeAnswer'>Sorry! No ability (like <div className='negativeAnswerDiv'>{this.state.value}</div>) found.
                    </div>}
            </div>
            </div>
          </div>
        );
    }
}
 
export default SearchBar;