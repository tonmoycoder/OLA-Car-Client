import { useEffect, useState } from 'react';

const CheckBuyer = (email) => {
  const [buyerState, setBuyerState] = useState(null);
  const [buyerLoader, setBuyerLoader] = useState(true);
  useEffect(() => {
    fetch(`https://ola-car-server.vercel.app/buyerState/${email}`)
      .then((res) => res.json())
      .then((result) => {
        setBuyerState(result);
        setBuyerLoader(false);
      });
  }, [email]);
  return [buyerState, buyerLoader];
};

export default CheckBuyer;
