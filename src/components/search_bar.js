/**
 * Created by david on 5/15/17.
 */
// if you need to convert some jsx into html 'react' is required
import React from 'react';

// this is a function component
// it's limited in its functionality
// const SearchBar = () => {
//   return <input />;
// };

// this is a class component
// create SearchBar class and give it all the functionality of React.Component class
class SearchBar extends React.Component {

    // this is how we initialize state in class based components
    // function based components do not have state
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    //every class must have this render function and return some jsx
    render() {
        // you could also remove the () around event
        // if you want to change a state property outside of the constructor use 'setState' and pass it an object
        return (
            <div>
                {/* on event change we update the value of term that we initialized in the constructor */}
                <input onChange={(event) => this.setState({term: event.target.value})}/>
                <br/>
                {/*Value of the input: {this.state.term}*/}
            </div>
        )
    }

    // event handlers provide event objects.  call them whatever you want
    // ^ simplified above ^

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;