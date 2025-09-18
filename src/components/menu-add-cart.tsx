import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
// import { addToCart } from '@/redux/cart-slice';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from '@/redux/cart-slice';

interface AddCartProps {
  menuId: number;
}

export default function AddCart({ menuId }: AddCartProps) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.menuId === menuId)
  );
  // const cartAll = useSelector((state: RootState) => state.cart);

  // Mengatur quantity dari state Redux saat komponen di-load atau menuId berubah
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [cartItem]); // Perhatikan dependency array-nya!

  // Fungsi untuk menangani penambahan item saat tombol 'Add' diklik
  const handleAddClick = () => {
    if (userId !== undefined) {
      dispatch(addToCart({ userId, menuId, quantity: 1 }));
    }
  };

  // Fungsi untuk menambah jumlah item yang sudah ada di keranjang
  const handleIncrement = () => {
    if (userId !== undefined) {
      dispatch(incrementQuantity({ userId, menuId }));
    }
  };

  // Fungsi untuk mengurangi jumlah item
  const handleDecrement = () => {
    if (userId !== undefined) {
      dispatch(decrementQuantity({ userId, menuId }));
    }
  };

  // Debugging console logs
  // Anda bisa menghapus ini di production
  useEffect(() => {
    // console.log({ menuId, quantity, cartAll });
  }, [menuId, quantity]);

  return (
    <div className='flex items-center space-x-2'>
      {quantity === 0 ? (
        <Button
          className='w-fit rounded-full px-6 py-0.5 text-sm font-bold'
          onClick={handleAddClick}
        >
          Add
        </Button>
      ) : (
        <>
          <button
            onClick={handleDecrement}
            className='hover:bg-accent-yellow ball h-8 w-8 bg-gray-200 text-xl hover:text-white'
          >
            −
          </button>
          <span className='text-lg font-medium'>{quantity}</span>
          <button
            onClick={handleIncrement}
            className='hover:bg-accent-red ball h-8 w-8 bg-gray-200 text-xl hover:text-white'
          >
            +
          </button>
        </>
      )}
    </div>
  );
}
