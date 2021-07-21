import React, { Component } from 'react'

export default class Addtodo extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" className="form-control rounded-0 mt-3 p-4" placeholder="Write your todo here"/>
                    <button type="submit" className="form-control rounded-0 btn-secondary">Add Todo</button>
                </form>
            </div>
        )
    }
}
