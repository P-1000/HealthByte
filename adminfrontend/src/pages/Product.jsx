import React from 'react';
import { useParams } from 'react-router-dom';
import getItemById from '../utils/getItemById';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { getAuth } from "firebase/auth";
// import { db } from "../firebase";
// import { updateDoc,doc, arrayUnion } from 'firebase/firestore';
// import getAllStaticPaths from '../../utils/getAllStaticPaths';
// import getItemById from '../../utils/getItemById';

const ProductDetails = ({ id, imageURL, name, amount }) => {
//   const auth = getAuth();
//   const user = useAuthState(auth);
  // console.log(user[0].uid);
  const query = useParams();
  const items = getItemById(query.id);
  console.log(items)
  // console.log(items);
//   const addToCart = () => {
//     if(user){
//       updateDoc(doc(db, "users", user[0].uid), {
//         cart: arrayUnion({
//           id: items.id,
//           title: items.title,
//           price: items.price,
//           image: items.image,
//           quantity: 1
//         })
//       }).catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//       //add the item into localstorage
//       // const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//       console.log("added to cart");
//     }else {
//       alert("Please login to add to cart");
//     }
    
//   }
const addToCart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ ...items, quantity: 1 });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log("Added to cart:", items.name);
}
  
  return (
    <div className='w-full md:py-20'>
      <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]'>
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
          <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
            <img className='productCarousel' src={items && items.imageURL}/>
          </div>
        </div>
        <div className='flex-[1] py-3'>
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {items && items.name}
          </div>
          <div className="text-lg font-semibold mb-5">
            Medicine name
          </div>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">
              MRP : &#8377;{items && items.amount}
            </p>

          </div>

          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black/[0.5] mb-20">
            {`(Also includes all applicable duties)`}
          </div>

          <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>

         


          <div className='py-4'>
            <div className="text-lg font-bold mb-5">
              Product Details
            </div>
            <div className="markdown text-md mb-5">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nisl vel lorem. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam lorem, nec ultricies nisl nisl vel lorem.
            </div>
          </div>

      </div>
    </div>
    </div >
  )
}

// export const getStaticPaths = () => {
//   const paths = getAllStaticPaths();

//   return {
//     paths,
//     fallback: true,
//   };
// };


// export const getStaticProps = (context) => {
//   const cid = context.params.id;
//   const item = getItemById(cid);

//   return {
//     props: {
//       ...item,
//     },
//   };
// };

export default ProductDetails