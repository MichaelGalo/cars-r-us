export const Orders = async () => {
  const response = await fetch("http://localhost:8088/orders");
  const orders = await response.json();

  let ordersHTML = ``;

  ordersHTML += orders
    .map((order) => {
      const orderPrice =
        order.colorId.price +
        order.interiorId.price +
        order.technologyId.price +
        order.wheelId.price;

      return `
       <article class="customOrders">
            <h2>Custom Car Orders</h2>
              <div class="order">
                  <h3>Order #${order.id}</h3>
                  <div>Color: ${order.colorId}</div>
                  <div>Interior: ${order.interiorId}</div>
                  <div>Technology Package: ${order.technologyId}</div>
                  <div>Wheels: ${order.wheelId}</div>
                  <div>Price: $${orderPrice}</div>
              </div>
        </article>
          `;
    })
    .join("");

  return ordersHTML;
};
