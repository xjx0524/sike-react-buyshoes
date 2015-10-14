const React = require("react");
const Ps = require("perfect-scrollbar");
const data = require("../data");
const QuantityControl = require("./QuantityControl");

let CartItem = React.createClass({
    render() {
        let {id, quantity} = this.props.cartItem;

        return (
            <div className="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img src={data.products[id].imagePath}/>
                    </div>

                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">
                            {data.products[id].name}
                        </div>

                        <div className="cart-item__price">
                            {data.products[id].price}
                        </div>
                    </div>

                    <img className="cart-item__trash" src="img/trash-icon.svg"/>
                </div>

                <div className="cart-item__qty">
                    <QuantityControl item={this.props.cartItem}/>
                </div>

            </div>
        );
    }
});

let Cart = React.createClass({
    componentDidMount() {
        let cart = React.findDOMNode(this.refs.cart);
        Ps.initialize(cart);
    },

    render() {
        let children = [];
        for (let id in data.cartItems) {
            children.push(<CartItem key={data.cartItems[id].id} cartItem={data.cartItems[id]} />);
        }

        return (
            <div className="cart">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" ref="cart">
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {children}
                </div>
            </div>
        );
    }
});

module.exports = Cart;