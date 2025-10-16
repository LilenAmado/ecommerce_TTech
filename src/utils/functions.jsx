export function handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty) {
  const updatedCart = cart.map(item => {
    if (item.id === productId) {
      if (type === 'add') {
        return { ...item, quantity: item.quantity + 1 };
      } else if (type === 'subtract') {
        return { ...item, quantity: item.quantity - 1 };
      }
    }
    return item;
  });

  // Se filtra si el array queda en cero
  const filteredCart = updatedCart.filter(item => item.quantity > 0);
  setCart(filteredCart);

  if(filteredCart.length === 0) {
    setIsCartEmpty(true)
  }else{
    setIsCartEmpty(false)
  }
};