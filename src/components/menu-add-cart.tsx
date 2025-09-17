import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { addToCart } from '@/redux/cart-slice';

interface AddCartProps {
  menuId: number;
}

export default function AddCart({ menuId }: AddCartProps) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const isicard = useSelector((state: RootState) => state.cart);

  const handleAddClick = () => setQuantity(1);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity === 1) {
      setQuantity(0); // kembali ke tombol Add
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log({ menuId, quantity });
    if (userId !== undefined) {
      dispatch(addToCart({ userId, menuId, quantity: quantity + 1 }));
    }
    console.log({ isicard });
  }, [quantity]);

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
