import WishlistProvider from "./WishlistProvider";
import CartProvider from "./CartProvider";


export const AppProviders = ({ Children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                {Children}
            </WishlistProvider>
        </CartProvider>
    )
}