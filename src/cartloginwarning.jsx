import { Link } from 'react-router-dom';
export default function Page() {
    return (<>
        <div className="flex p-10 flex-col justify-center items-center" style={{height:'80vh'}}>
            <Link to="/">
                <button>
                    <img
                        src="https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png"
                        alt="cart"
                        className="w-50"
                    />
                </button>
            </Link> {/* <p className="text-lg text-center pl-3 font-bold text-teal-800">Please <a href='/login'>Login</a> to view Your cart!</p>
            */}
            <p className='p-5 text-center text-lg  text-gray-500'><span>Please </span><a className='hover:underline hover:text-teal-800' href='/login'>Login</a>  to view Your cart!</p>
       
        </div>
    </>)
}