import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Page from "./App";

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

class App extends React.Component {
    state = { value: '', error: false, }

    click = (event) => {
        const value = event.target.value;

        console.log('va', value);

        let error = false;

        if (value.length < 3) {
            error = true;
        }

        this.setState({ value, error })
    }

    render() {
        return (
            <div>
                {this.state.error && ( <div>Число не должно начинаться с 1</div> )}
                <input value={this.state.value} onChange={this.click} type="text"/>
                {/*<button type="submit">click</button>*/}
                <Page/>
            </div>
        );
    }
}

ReactDOM.render(<App />, rootElement)
// ReactDOM.render(<NumberList numbers={numbers} />, rootElement)