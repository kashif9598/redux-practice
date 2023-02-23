const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src={process.env.PUBLIC_URL + '/cart.png'} alt='cart' />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={process.env.PUBLIC_URL + '/iphone.jpg'} alt='iphone' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Iphone
                    </span>
                    <span>
                        Price : $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;