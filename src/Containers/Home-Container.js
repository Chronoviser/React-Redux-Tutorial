import Home from '../Components/Home';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../Services/Actions/Actions';

const mapStateToProps = state => ({
    cartData: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeFromCartHandler: data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
