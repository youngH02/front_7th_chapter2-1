import { CartHeader } from "../components/cart/CartHeader.js";
import { CartList } from "../components/cart/CartList.js";
import { EmptyCart } from "../components/cart/EmptyCart.js";

export const CartPage = ({ cartProducts = [] }) => {
  return /*html*/ `
<div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
  <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
    ${CartHeader()}
    ${!cartProducts || cartProducts.length === 0 ? EmptyCart : CartList({ cartProducts })}
  </div>
</div>
`;
};
