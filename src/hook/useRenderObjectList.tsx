// useRenderObjectList.tsx
// import { useMemo } from 'react';

// export function useRenderObjectList(data: Record<string, any>[]) {
//   return useMemo(() => {
//     return (
//       <div>
//         {
//         data.map((item) => (
//           <div key={item.id} className='m-2 rounded-2xl border p-4'>
//             {Object.entries(item).map(([key, value]) => {
//               let displayValue = Array.isArray(value)
//                 ? value.join(', ')
//                 : typeof value === 'object' && value !== null
//                   ? JSON.stringify(value)
//                   : value;

//               return (
//                 <div key={key}>
//                   {key} : {displayValue}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     );
//   }, [data]);
// }

export function renderObjectList(data: Record<string, any>[]) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className='text-gray-500 italic'>No data available.</p>;
  }

  return (
    <div className='space-y-4'>
      {data.map((item, index) => (
        <div
          key={item.id ?? index}
          className='m-2 rounded-2xl border bg-white p-4 shadow-sm'
        >
          {Object.entries(item).map(([key, value]) => {
            const displayValue = Array.isArray(value)
              ? value.join(', ')
              : typeof value === 'object' && value !== null
                ? JSON.stringify(value)
                : String(value);

            return (
              <div key={key} className='flex justify-between text-sm'>
                <span className='font-medium text-gray-700'>{key}</span>
                <span className='text-gray-900'>{displayValue}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
