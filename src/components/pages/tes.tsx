// components/ReviewDate.tsx
import React from 'react';
import dayjs from 'dayjs';

interface ReviewDateProps {
  createdAt: string; // ISO date string, misalnya "2025-09-16T12:34:56Z"
}

const ReviewDate: React.FC<ReviewDateProps> = ({ createdAt }) => {
  const formattedDate = dayjs(createdAt).format('DD MMMM YYYY'); // contoh: "16 September 2025"

  return <div>{formattedDate}</div>;
};

export default ReviewDate;
