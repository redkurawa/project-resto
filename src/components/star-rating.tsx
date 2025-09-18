interface StarProp {
  star: number;
}

export const StarRated = ({ star }: StarProp) => {
  return (
    <>
      {Array.from({ length: star }, (_, i) => (
        <img key={i} src='/icons/star.svg' alt='star' />
      ))}
    </>
  );
};
