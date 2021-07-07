import React, { useState } from "react";

// Refactoring
// create a new func SearchBar and refactor the functions from the old app
const SearchBar = ({ onFormSubmit }) => {
    //1 starting from the top refactor the state to useSate
    const [term, setTerm] = useState('');

    // 2. cut and paste the 2 event handlers here and adjust the syntax by adding const in front of each 
    //5.0 optional: delete this, move it to the return()>onChange
    // const onInputChange = (event) => {
    //         //3.1 update the codes, replace this.setState with setTerm
    //         // this.setState({ term: event.target.value })
    //         setTerm(event.target.value);
    //     }
        //3.2 we will be receiving a prop onFormSubmit so change onFormSubmit to onSubmit to avoid a name collision
        // const onFormSubmit = (event) => {
    const onSubmit = (event) => {
            event.preventDefault();

            // 3.3 change this.props to onFormSubmit, to access our value change this.state.term to term (term in our useState) and destructure it in the func declaration at top
            // this.props.onFormSubmit(this.state.term)
            onFormSubmit(term);
        }
        // 4. cut the whole of the return() statement of render() from the old and paste it here
    return ( 
        <div className = "search-bar ui segment" > 
            { /* 4.1 replace this.onFormSubmit in onSubmit to onSubmit as we have changed the name */ } 
            <form onSubmit = { onSubmit }
                className = "ui form" >
                <div className = "field">
                    <label > Video Search </label>  
                    <input type = "text"
                        value = { term }
                    //4.2 to update value, change this.state.term to just term to reflect the state above

                    // onChange = { onInputChange } //4.3 for the onChange we will have just onInputChange instEAD of this.onInputChange
                    //5.0 our onInputChange func is very short, we can instead move it here like so and not have a separate func
                        onChange={(event) => setTerm(event.target.value)}
                    />  
                </div>  
            </form>  
        </div>
    );
}
// now our class compo is completely empty so we can just delete it

export default SearchBar;