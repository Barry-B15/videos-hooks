import React from "react";

class SearchBar extends React.Component {
    // init a state
    state = { term: ""}

// define a func to handle when input changes
    onInputChange = (event) => {
        // update the value from state
        this.setState({ term: event.target.value})
    }
    // create an onFormSubmit to handle form submittal
    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO : make sure we call callback from parent compo
    }

    render() {
        return (
            <div className="search-bar ui segment">
                {/* add onSubmit, then create onFormSubmit below onInputChange */}
                <form onSubmit = { this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text"
                        value={this.state.term} 
                        onChange={this.onInputChange} // add onInputChange then go define it below state
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;