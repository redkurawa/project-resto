import navbars from '@/types/navbar';

export const RestoNavbar = () => {
  return (
    <div className='sm-container my-8 grid grid-cols-3 justify-between gap-5 md:grid-cols-6'>
      {navbars.map((data) => (
        <div>
          <div className='rounded-2xl border px-12 py-4 shadow-xl'>
            <img src={data.src} alt={data.name} />
          </div>
          <div className='text-center text-lg font-bold'>{data.name}</div>
        </div>
      ))}
    </div>
  );
};
