const React = require("react");
const data = require("../data");
const QuantityControl = require("./QuantityControl");

let Product = React.createClass({
    render() {
        let {name,price,imagePath} = this.props.product;
        let add = (
            <a className="product__add">
                <img className="product__add__icon" src="img/cart-icon.svg"/>
            </a>
        );
        if (data.cartItems.hasOwnProperty(this.props.product.id)) {
            add = (<QuantityControl item={data.cartItems[this.props.product.id]} variant="gray"/>);
        }

        return (
            <div className="product">
                <div className="product__display">
                    <div className="product__img-wrapper">
                        <img className="product__img" src={imagePath}/>
                    </div>

                    {add}

                    <div className="product__price">
                        {price}
                    </div>
                </div>

                <div className="product__description">
                    <div className="product__name">
                        {name}
                    </div>

                    <img className="product__heart" src="img/heart.svg"/>
                </div>
            </div>
        );
    }
});

let Products = React.createClass({
    render() {
        let children = [];
        for (let id in data.products) {
            children.push(<Product key={data.products[id].id} product={data.products[id]}/>);
        }

        return (
            <div className="products">
                {children}
            </div>
        );
    }
});

module.exports = Products;