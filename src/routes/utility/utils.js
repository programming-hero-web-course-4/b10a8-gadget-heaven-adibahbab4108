import { toast } from "react-toastify";

const getAllFromLocalStorage = (type) => {

    const allData = localStorage.getItem(type)

    if (allData) return JSON.parse(allData);
    else return []

}
const deleteFromList = (id, type) => {
    console.log(type)
    const items=getAllFromLocalStorage(type)
    const updatedItems= items.filter(item=> item.product_id!=id)
    console.log(updatedItems)
    localStorage.setItem(type, JSON.stringify(updatedItems))
}
const addToCart = (cart) => {
    const cartlist = getAllFromLocalStorage('cart');

    const isExist = cartlist.find(data => data.product_id == cart.product_id)
    if (isExist) return toast.error("Product already exist in cart");
    else toast.success("Product Added Successfully in the Cart")

    cartlist.push(cart);
    localStorage.setItem('cart', JSON.stringify(cartlist))
}
const addToWishlist = (cart) => {
    const wishlist = getAllFromLocalStorage('wishlist');

    const isExist = wishlist.find(data => data.product_id == cart.product_id)
    if (isExist) return toast.error("Product already exist in wishlist")
    else toast.success("Product Added Successfully in the Wishlist")
    wishlist.push(cart);

    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

export { addToCart, addToWishlist, deleteFromList, getAllFromLocalStorage, }