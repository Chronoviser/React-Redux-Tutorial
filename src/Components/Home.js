function Home(props) {
    return (
        <div className="home-content">
            <div>
                <img
                    src="https://clipart.info/images/ccovers/1505918647iphone-x-png.png"
                    alt=""
                    className="home-img" />
            </div>
            <div className="home-texts">
                <p>I-Phone</p>
                <p>Price: $999.00</p>
            </div>
            <div className="home-texts">
                <button className="home-button" onClick={props.removeFromCartHandler}>-</button>
                <p>{props.cartData.length}</p>
                <button className="home-button" onClick={() => props.addToCartHandler({ price: 999, name: 'I Phone' })}>+</button>
            </div>
        </div>
    );
}

export default Home;