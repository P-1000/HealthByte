import React, { useEffect } from 'react';
import CartItem from '../components/Ecommerce/CartItem';
// import Link from 'next/link'
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { getAuth } from "firebase/auth";
// import { db } from "@/firebase";
// import {doc, onSnapshot, getDoc} from 'firebase/firestore';

const Cart = () => {
    // const auth = getAuth();
    // const user = useAuthState(auth);
    // const user2 = user[0] && user[0].uid;
    // const [cartItems, setCartItems] = useState([]);

    
    // useEffect(() => {
    //     const getCartItems = async () => {
    //         // console.log(user2);
    //         // console.log(user[0].uid);
    //         const docRef = await doc(db, "users", user[0].uid);
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.exists()) {
    //             console.log("Document data:", docSnap.data());
    //             setCartItems(docSnap.data().cart);
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //     }
    //     getCartItems();
    //     console.log(cartItems);
    // }, [user2]);

    //create a function to fetch all the cart items set in the localstorage
    const getCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        return cartItems;
    }
    const cartItems = getCartItems();
    console.log(cartItems);



    return (
        <div className="w-full md:py-20">
            <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
                {cartItems.length > 0 && (
                <>

                    <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            Shopping Cart
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 py-10">

                        <div className="flex-[2]">
                            <div className="text-lg font-bold">
                                Cart Items
                            </div>
                            {cartItems.map((item) => (
                                    <CartItem key={item.id}  amount={item.amount} name={item.name} description={item.description} imageURL={item.imageURL} />
                                ))}

                        </div>
                        <div className="flex-[1]">
                            <div className="text-lg font-bold">Summary</div>

                            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                <div className="flex justify-between">
                                    <div className="uppercase text-md md:text-lg font-medium text-black">
                                        Subtotal
                                    </div>
                                    <div className="text-md md:text-lg font-medium text-black">
                                        &#8377;800
                                    </div>
                                </div>
                                <div className="text-sm md:text-md py-5 border-t mt-5">
                                    The subtotal reflects the total price of
                                    your order, including duties and taxes,
                                    before any applicable discounts. It does
                                    not include delivery costs and
                                    international transaction fees.
                                </div>
                            </div>

                            <button
                                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                            // onClick={handlePayment}
                            >
                                Checkout
                                {/* {loading && <img src="/spinner.svg" />} */}
                            </button>

                        </div>
                    </div>
                </>
                 )} 

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">

                    <span className="text-xl font-bold">
                        Your cart is empty
                    </span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories.
                    </span>
                    <a
                        href="/medico
                        "
                        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                        Continue Shopping
                    </a>
                </div>
                  )} 
            </div>
        </div>
    )
}

export default Cart