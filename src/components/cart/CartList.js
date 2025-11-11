const cartItem = ({ productId, title, image, lprice }) => /*html*/ `
<div class="p-4 space-y-4">
  <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id=${productId}>
    <!-- 선택 체크박스 -->
    <label class="flex items-center mr-3">
      <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
                focus:ring-blue-500" data-product-id=${productId}>
    </label>
    <!-- 상품 이미지 -->
    <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
      <img src=${image} alt=${title} class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id=${productId}>
    </div>
    <!-- 상품 정보 -->
    <div class="flex-1 min-w-0">
      <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id=${productId}>
        ${title}
      </h4>
      <p class="text-sm text-gray-600 mt-1">
        ${Number(lprice).toLocaleString()}원
      </p>
      <!-- 수량 조절 -->
      <div class="flex items-center mt-2">
        <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
                 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id=${productId}>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
        </button>
        <input type="number" value="2" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
                border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id=${productId}>
        <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
                 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id=${productId}>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>

  </div>`;

export const CartList = ({ cartProducts }) => {
  const products = cartProducts ? cartProducts : [];
  console.log(products);
  return /*html*/ `
  <div class="flex flex-col max-h-[calc(90vh-120px)]">
    <!-- 전체 선택 섹션 -->
    <div class="p-4 border-b border-gray-200 bg-gray-50">
      <label class="flex items-center text-sm text-gray-700">
        <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
        전체선택 (2개)
      </label>
    </div>

    <div class="flex-1 overflow-y-auto">
      ${products.map((product) => cartItem(product)).join("")}
    </div>

    <!-- 하단 액션 -->
    <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      <!-- 선택된 아이템 정보 -->
      <!-- 총 금액 -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold text-gray-900">총 금액</span>
        <span class="text-xl font-bold text-blue-600">670원</span>
      </div>
      <!-- 액션 버튼들 -->
      <div class="space-y-2">
        <div class="flex gap-2">
          <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                       hover:bg-gray-700 transition-colors text-sm">
            전체 비우기
          </button>
          <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                       hover:bg-blue-700 transition-colors text-sm">
            구매하기
          </button>
        </div>
      </div>
    </div>

  </div>
  `;
};
