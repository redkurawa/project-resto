interface Header {
  name: string;
  place: string;
  logo: string;
  star: number;
}

interface HeaderProps {
  headers: Header;
  home?: boolean;
}
export const RestoNameHeader: React.FC<HeaderProps> = ({
  headers,
  home = false,
}) => {
  console.log({ headers });
  return (
    <div className='flex items-center gap-2'>
      <img
        src={headers.logo}
        alt='logo'
        className={`rounded-xl ${home ? 'size-30' : 'size-20'}`}
      />
      <div>
        <h1 className='text-2xl font-bold'>{headers.name}</h1>
        <div className='flex items-center'>
          <img src='/icons/star.svg' alt='star' />
          {headers.star}
        </div>
        <p className='text-gray-500'>{headers.place}</p>
      </div>
    </div>
  );
};
