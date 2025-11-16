// export function handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty) {
//   const updatedCart = cart.map(item => {
//     if (item.id === productId) {
//       // obtener precio unitario 
//       const unitPrice = item.unitPrice ?? (item.quantity ? item.price / item.quantity : item.price);

//       const newQuantity = type === 'add'
//         ? item.quantity + 1
//         : Math.max(0, item.quantity - 1);

//       const newPrice = newQuantity * unitPrice;

//       return {
//         ...item,
//         quantity: newQuantity,
//         price: newPrice,
//         unitPrice // asegura que quede guardado para próximas operaciones
//       };
//     }
//     return item;
//   });

//   const filteredCart = updatedCart.filter(item => item.quantity > 0);
//   setCart(filteredCart);
//   setIsCartEmpty(filteredCart.length === 0);
// };

export function handleUpdatedToCart(productId, type, cart, setCart, setIsCartEmpty) {
  const existing = (cart || []).find(i => String(i.id) === String(productId));
  if (!existing) return;

  const updated = (cart || []).map(item => {
    if (String(item.id) !== String(productId)) return item;

    const unitPrice = item.unitPrice ?? (item.quantity ? item.price / item.quantity : item.price ?? 0);
    const newQuantity = type === 'add' ? (item.quantity || 0) + 1 : Math.max(0, (item.quantity || 0) - 1);
    const newPrice = unitPrice * newQuantity;

    return { ...item, quantity: newQuantity, price: newPrice, unitPrice };
  }).filter(item => item.quantity > 0);

  setCart(updated);
  setIsCartEmpty(updated.length === 0);
}

export function addOrUpdateCart(product, cart, setCart, setIsCartEmpty) {
  if (!product || !product.id) return;

  const existing = (cart || []).find(i => String(i.id) === String(product.id));

  if (!existing) {
    const newItem = {
      ...product,
      quantity: 1,
      unitPrice: product.price ?? 0,
      price: product.price ?? 0
    };
    const updated = [...(cart || []), newItem];
    setCart(updated);
    setIsCartEmpty(updated.length === 0);
    return;
  }

  const updated = (cart || []).map(item => {
    if (String(item.id) !== String(product.id)) return item;
    const unitPrice = item.unitPrice ?? (item.quantity ? item.price / item.quantity : item.price ?? 0);
    const newQty = (item.quantity || 0) + 1;
    return { ...item, quantity: newQty, unitPrice, price: unitPrice * newQty };
  });

  setCart(updated);
  setIsCartEmpty(updated.length === 0);
}