export const cartStore = {
  state: { cart: [] },
  // state: {
  //   cart: [
  //     { productId: "1", title: "샘플상품", image: "sample.jpg", lprice: 1000, quantity: 1 },
  //     { productId: "2", title: "샘플상품", image: "sample.jpg", lprice: 1000, quantity: 1 },
  //   ],
  // },
  observers: [],
  subscribe(observerFn) {
    if (typeof observerFn !== "function") return () => {};

    this.observers.push(observerFn);
    observerFn(this.state.cart);

    return () => {
      this.observers = this.observers.filter((observer) => observer !== observerFn);
    };
  },
  notify() {
    console.log("cartStore 상태 변경 알림:", this.state.cart);
    this.observers.forEach((observerFn) => observerFn(this.state.cart));
  },
  getTotalCount() {
    return this.state.cart.length;
  },
  addToCart(product) {
    const existingItem = this.state.cart.find((item) => item.productId === product.productId);
    if (existingItem) {
      console.log("존재하는 장바구니에 추가:", existingItem);
      existingItem.quantity += 1;
    } else {
      console.log("장바구니에 추가:", product);
      const cartItem = {
        productId: product.productId,
        title: product.title || "",
        image: product.image || "",
        lprice: product.lprice || 0,
        quantity: product.quantity || 1,
      };
      this.state.cart.push(cartItem);
    }
    this.notify();
  },
  decreaseQuantity(productId) {
    const item = this.state.cart.find((item) => item.productId === productId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.notify();
    }
  },
  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter((item) => item.productId !== productId);
    this.notify();
  },
  clearCart() {
    this.state.cart = [];
    this.notify();
  },
};
