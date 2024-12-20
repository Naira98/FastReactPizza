import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="small">Get Priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ _, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
