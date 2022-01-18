import { useState } from 'react'
const useHackShop = () => {
  const Products = [
    {
        heading: "Cap - $10",
        name: "Cap",
        price: 10
    },
    {
        heading: "Hand Bag - $30",
        name: "HandBag",
        price: 30
    },
    {
        heading: "Shirt - $30",
        name: "Shirt",
        price: 30
    },
    {
        heading: "Shoes - $50",
        name: "Shoe",
        price: 50
    },
    {
        heading: "Pant - $40",
        name: "Pant",
        price: 40
    },
    {
        heading: "Slipper - $20",
        name: "Slipper",
        price: 20
    }
];
  const [products, setProducts ] = useState([])
  const [cart, setCart ] = useState({
    items: [],
    subTotal: 0,
    totalPrice: 0,
    discount: 0,
    selectedCoupon: '0'
  })
  
  const handleProducts = () => {
    setProducts(PRODUCTS(Products))
  }
  const PRODUCTS = (data) => {
    return data.map((item, index) => ({
        ...item,
        id: index,
        image: `/images/items/${item.name.toLocaleLowerCase()}.png`,
        cartQuantity: 0,

    }));
  }
  const toggleProducts = (activity, product, d) => {
    if(activity == 'add') {
      let itms = cart.items;
      if(cart.items.find(item => item['id'] == product.id) == undefined) {
        product.cartQuantity = 1
        itms.push(product);
      }
      else {
        cart.items.forEach((element, index) => {
          if(element.id === product.id) {
            product.cartQuantity = product.cartQuantity + 1
            cart.items[index] = product;
          }
        });
        itms = cart.items
      } 
      setCart({...cart, 
        items: itms,
        subTotal: parseInt(cart.subTotal) + product.price,
        totalPrice: parseInt(cart.subTotal) + product.price - (Math.floor(((parseInt(cart.subTotal) + product.price)) * cart.discount  )/100),
        discount: parseInt(cart.discount)
      })
    }
    else if (activity == 'delete'){
      let itms = cart.items;
      if(cart.items.find(item => item['cartQuantity'] > 1) ) {
        cart.items.forEach((element, index) => {
          if(element.id === product.id) {
            product.cartQuantity = product.cartQuantity - 1
            cart.items[index] = product;
          }
        });
        itms = cart.items;
      } 
      else {
        cart.items.forEach((element, index) => {
          if(element.id === product.id) {
            product.cartQuantity = product.cartQuantity - 1
            cart.items.splice(index)
          }
        });
        itms = cart.items
      }
      setCart({...cart, 
        items: itms,
        subTotal: parseInt(cart.subTotal) - product.price,
        totalPrice: parseInt(cart.subTotal) - product.price - (Math.floor(((parseInt(cart.subTotal) + product.price)) * cart.discount  )/100),
        discount: parseInt(cart.discount)
      })
    }
    else if (activity == 'discount'){
      setCart({...cart, 
        items: cart.items,
        subTotal: parseInt(cart.subTotal),
        totalPrice: parseInt(cart.subTotal) - (Math.floor((cart.subTotal) * d  )/100),
        discount: d
      })
    }
  }
  return { toggleProducts, products, cart, handleProducts }
}
export default useHackShop
