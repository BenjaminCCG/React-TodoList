import React from 'react';

class DoingList extends React.Component {
    constructor(...args) {
        super(...args)
    }
    fn(index, e) {
        this.props.parent.toDone(index, e)
    }
    fn2(index) {
        this.props.parent.doingDel(index)
    }
    render() {
        return (
            <div>
                <div className="doing">
                    <h2>正在进行</h2>
                    <ul>
                        {this.props.list.map((item, index) => (
                            <li key={index}>
                                <input type="checkbox" onClick={this.fn.bind(this, index)} />
                                <span>{item}</span>
                                <a href='##' onClick={this.fn2.bind(this, index)}>删除</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default DoingList