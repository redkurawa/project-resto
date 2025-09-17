import { selectCartWithDetails } from '@/redux/cart-selectors';
import { useSelector } from 'react-redux';
import { Header } from '../resto-header';
import AddCart from '../menu-add-cart2';
import { formatRupiah } from '@/utils/format-rp';
// import { selectCartWithDetails } from '../redux/cartSelectors';

const getTotal = (items: { price: number; quantity: number }[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const CartList = () => {
  const cartDetails = useSelector(selectCartWithDetails);
  // const cartdet = useSelector(selectCartWithDetails);
  const totalHarga = getTotal(cartDetails);

  return (
    <>
      <Header />
      <div className='min-h-screen bg-neutral-50 pt-12'>
        <div className='mx-auto max-w-200'>
          <h1 className='mb-8 text-[32px] font-extrabold'>MyCart</h1>
          <div className='shadow-all rounded-2xl border p-5'>
            {cartDetails.map((item, i) => (
              <div key={i} className='flex-between mb-5'>
                <div className='flex-1'>
                  <p>{item.menuName}</p>
                  <p>{formatRupiah(item.price)}</p>
                  <p>jumlah : {item.quantity}</p>
                </div>
                <div className='flex flex-1 justify-end'>
                  <AddCart menuId={Number(item.menuId)} />
                </div>
              </div>
            ))}
            <p className='border-t pt-2 text-lg font-bold'>
              Total Semua: {formatRupiah(totalHarga)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
