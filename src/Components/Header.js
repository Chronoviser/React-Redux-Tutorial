function Header(props) {
    return (
        <>
            <h1>Apple <span style={{ color: "salmon" }}>Store</span></h1>
            <div className="home-cart">
                <p className="home-cart-p">
                    <strong>Cart</strong>: {props.cartData.length}
                </p>
            </div>
        </>
    );
}

export default Header;