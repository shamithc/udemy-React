// import React from 'react';

// const SearchBar = () => {
//     return <input />;
// };

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
      return (
          <div className="search-bar">
            <input
            value={this.state.term}
            onChange={event => this.onInpuntChange(event.target.value)}
            />
          </div>
        )
    }

    onInpuntChange(term){
        console.log(term)
        this.setState({term})
        this.props.videoSearch(term);
    }
}

export default SearchBar;
