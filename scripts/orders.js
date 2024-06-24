export const Orders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=color&_expand=interior&_expand=technology&_expand=wheel&_expand=model"
  );
  const orders = await response.json();

  let ordersHTML = ``;

  ordersHTML += orders
    .map((order) => {
      let orderPrice =
        order.color.price +
        order.interior.price +
        order.technology.price +
        order.wheel.price;

      if (order.modelId === 2) {
        orderPrice = orderPrice * 1.5;
      } else if (order.modelId === 3) {
        orderPrice = orderPrice * 2;
      } else {
        orderPrice = orderPrice;
      }

      return `
       <article class="customOrders">
            <h2>Custom Car Orders</h2>
              <div class="order">
                  <h3>Order #${order.id}</h3>
                  <div>Color: ${order.color.name}</div>
                  <div>Interior: ${order.interior.name}</div>
                  <div>Technology Package: ${order.technology.name}</div>
                  <div>Wheels: ${order.wheel.name}</div>
                  <div>Model: ${order.model.name}</div>
                  <div>Price: ${orderPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}</div>
              </div>
        </article>
          `;
    })
    .join("");

  return ordersHTML;
};
