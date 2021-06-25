import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


const rootElement = document.querySelector('#root');
const SearchField = (props) => {
    return (
    <div className="search">
        <h1 className="search_title">{`Hello, ${props.name}. What to search for you?`}</h1>
        <div className="search_field">
            <input type="text" className="search_input"/>
            <button className="search_button">Search</button>
        </div>
    </div>
    );
};
    ReactDOM.render(<SearchField name="Bob"/>, rootElement);

