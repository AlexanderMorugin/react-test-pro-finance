import { Product } from '../../entities/table/ui/table/table';

const useTotal = (data: Product[]) => {
  const totalQuantity = data.reduce(
    (acc, n) => acc + Number(n.product_quantity),
    0
  );
  const totalPrice = data.reduce((acc, n) => acc + Number(n.price), 0);

  return {
    totalQuantity,
    totalPrice,
  };
};

export default useTotal;
