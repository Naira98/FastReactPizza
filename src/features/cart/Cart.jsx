import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import BackButton from "../../ui/BackButton";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col px-4 py-3">
      <BackButton to="/menu">&larr; Back to menu</BackButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart {username && `,${username}`}
      </h2>
      <ul className="mb-4 mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
