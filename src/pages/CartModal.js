import { CartHeader } from "../components/cart/CartHeader";
import { CartList } from "../components/cart/CartList";

let isOpen = false;
const MODAL_ROOT_ID = "cart-modal-root";
export const CartModal = () => {
  return /*html*/ `
<div id="root">
  <div>모달띄우기</div>
</div>
`;
};

const CartModalTemplate = () => /*html*/ `
<div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
  <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
  <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
    <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
      ${CartHeader()}
      ${CartList()}
    </div>
  </div>
</div>
`;

const getModalRoot = () => {
  let root = document.getElementById(MODAL_ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = MODAL_ROOT_ID;
    document.body.appendChild(root);
  }
  return root;
};

export const openCartModal = () => {
  console.log("openCartModal called");
  if (isOpen) return;
  const root = getModalRoot();
  console.log("Modal root:", root);
  root.innerHTML = CartModalTemplate();
  document.body.classList.add("overflow-hidden");
  isOpen = true;
};

export const closeCartModal = () => {
  const root = document.getElementById(MODAL_ROOT_ID);
  if (!root) return;
  root.innerHTML = "";
  document.body.classList.remove("overflow-hidden");

  isOpen = false;
};
