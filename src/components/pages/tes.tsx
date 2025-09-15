// import { useState } from 'react';

// export default function ToggleGroup() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//     console.log(`tombol${index + 1} diklik`);
//   };

//   return (
//     <div className='flex gap-4'>
//       {[0, 1, 2, 3].map((i) => (
//         <div
//           key={i}
//           className={`cursor-pointer rounded border p-4 ${
//             activeIndex === i ? 'bg-red-500 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => handleClick(i)}
//         >
//           {`Tombol ${i + 1}`}
//         </div>
//       ))}
//     </div>
//   );
// }
import { menuTypes } from '@/types/resto';
import { useState } from 'react';

export default function ToggleGroup() {
  const [activeIndex, setActiveIndex] = useState(2); // Tombol ke-3 aktif saat load

  const handleClick = (index: number) => {
    setActiveIndex(index);
    console.log(`tombol${index + 1} diklik`);
    console.log(`tombol ${menuTypes[index]}`);
  };

  return (
    <>
      <div className='flex gap-4'>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`cursor-pointer rounded border p-4 ${
              activeIndex === i
                ? 'bg-red-500 text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => handleClick(i)}
          >
            {`Tombol ${i + 1}`}
          </div>
        ))}
      </div>
      <div className='mt-5 flex gap-4'>
        {menuTypes.map((menu, i) => (
          <div
            key={i}
            className={`rounded-2xl border px-4 py-1 ${
              activeIndex === i
                ? 'bg-red-500 text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => handleClick(i)}
          >
            {menu}
          </div>
        ))}
      </div>
    </>
  );
}
