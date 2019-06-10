import React from 'react';

class Header extends React.Component {
    constructor(...args) {
        super(...args)
    }
    fn(e) {
        this.props.parent.add(e)
    }
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>ToDolist</h1>
                        <div>
                            <input type="text" placeholder='添加ToDo' onKeyDown={this.fn.bind(this)} ref='add' />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header