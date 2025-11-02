export function handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty) {
  const updatedCart = cart.map(item => {
    if (item.id === productId) {
      // obtener precio unitario (si ya está guardado úsalo, si no derivalo)
      const unitPrice = item.unitPrice ?? (item.quantity ? item.price / item.quantity : item.price);

      const newQuantity = type === 'add'
        ? item.quantity + 1
        : Math.max(0, item.quantity - 1);

      const newPrice = newQuantity * unitPrice;

      return {
        ...item,
        quantity: newQuantity,
        price: newPrice,
        unitPrice // asegura que quede guardado para próximas operaciones
      };
    }
    return item;
  });

  const filteredCart = updatedCart.filter(item => item.quantity > 0);
  setCart(filteredCart);
  setIsCartEmpty(filteredCart.length === 0);
};