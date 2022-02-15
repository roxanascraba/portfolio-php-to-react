import React, { /*useState,*/ Component }  from 'react';
import '../css/style.css'

class SearchBar extends Component {
    state = { 
        value: ''
    };
    //const [searchValue, setSearchValue] = useState("the search value"); //deconstructing array
    
    handleImputChange = (event) => {
        //console.log(event.target.value);  
        this.setState({value : event.target.value}); // setSearchValue(event.target.value);
        //console.log('state.value: ',this.state.value);
    };

    handleClear = () => {
        //console.log('Button Clear clicked');
        this.setState({value : ''}); // clear out the search value
    }

    handleSearch = () => {
        //console.log('Button Search clicked');
    }

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
                    onChange={this.handleImputChange}
                    id="inputSearch" />&nbsp; 
                {this.shouldDisplay() && <button onClick={this.handleClear}> Clear</button> }
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