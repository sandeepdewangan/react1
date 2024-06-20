import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurants";

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  const cart = [
    {
      pizza: "Cheese Magretha",
      quantity: 2,
      price: 300,
    },
    {
      pizza: "Farmhouse",
      quantity: 3,
      price: 500,
    },
  ];
  return (
    <div>
      Create Order
      <Form method="POST">
        <div>
          <label>Full Name</label>
          <input type="text" name="fullname" />
          {formErrors?.fullname && <p>{formErrors.fullname}</p>}
        </div>
        <div>
          <label>Phone</label>
          <input type="number" name="phone" />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" />
        </div>
        <div>
          <label>Want to prioritize your order?</label>
          <input type="checkbox" name="priority" />
        </div>
        <div>
          <button disabled={isSubmitting}>Order Now</button>
        </div>
        {/*Passing cart data into post request via hidden field*/}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

// submitted form trigger this function.
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  //  validate phone number
  if (order.phone.length != 10) {
    errors.phone = "Phone number is invalid";
  }
  if (order.fullname.length < 3) {
    errors.fullname = "Name is invalid";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
