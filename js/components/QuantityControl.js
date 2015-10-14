const React = require("react");

let QuantityControl = React.createClass({
    render() {
        let {id, quantity} = this.props.item;

        return (
            <div className={this.props.variant ? "adjust-qty adjust-qty--" + this.props.variant : "adjust-qty"}>
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>
        );
    }
});

module.exports = QuantityControl;