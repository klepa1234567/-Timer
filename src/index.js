import React, {Component} from 'react';
import Counter from "./Counter";
import ReactDOM from 'react-dom'
import './styles.css'


const test = document.querySelector('#root')

ReactDOM.render(<Counter />, test)
