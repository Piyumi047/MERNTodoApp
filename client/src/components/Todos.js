

import React, { Component } from 'react'
import {Consumer} from '../context';
import Todo from './todo';

export default class Todos extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                  const {todos } = value
                  return todos.map(t=>
                  < Todo  tdo={t} key={t.id} />)
            }
            }
            
            </Consumer>
           
        )
    }
}
