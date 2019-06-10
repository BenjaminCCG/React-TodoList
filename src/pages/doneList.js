import React from 'react';

class doneList extends React.Component {
    constructor(...args) {
        super(...args)
    }
    fn(index) {
        this.props.parent.toDoing(index)
    }
    fn2(index) {
        this.props.parent.doneDel(index)
    }
    render() {
        return (
            <div>
                <div className="done">
                    <h2>已经完成</h2>
                    <ul>
                        {this.props.list.map((item, index) => (
                            <li key={index}>
                                <input type="checkbox" onClick={this.fn.bind(this, index)} />
                                <span>{item}</span>
                                <a href='##' onClick={this.fn2.bind(this, index)}>delete</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default doneList