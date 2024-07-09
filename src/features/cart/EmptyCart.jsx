import BackButton from '../../ui/BackButton';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <BackButton to="/menu">&larr; Back to menu</BackButton>

      <p className='font-semibold mt-7'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
