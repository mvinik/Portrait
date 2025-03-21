import { Link } from 'react-router-dom';
export default function CartEmptyWarning() {
    return (<>
        <div className="flex p-10  flex-col justify-center items-center">
            <Link to="/">
                <button>
                    <img
                        src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png"
                        alt="cart"
                        className="w-50"
                    />
                </button>
            </Link>
            {/* <p className="text-lg text-center pl-3 font-bold text-teal-800">Your Cart is Empty!</p> */}
            <p className='p-5 text-center text-xl tracking-wider text-gray-500'>Your Cart is Empty!</p>
          
        </div>
    </>)
}