export const Orders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=color&_expand=interior&_expand=technology&_expand=wheel"
  );
  const orders = await response.json();

  let ordersHTML = ``;

  ordersHTML += orders
    .map((order) => {
      const orderPrice =
        order.color.price +
        order.interior.price +
        order.technology.price +
        order.wheel.price;

      // To automatically format the number as currency
      orderPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });

      return `
       <article class="customOrders">
            <h2>Custom Car Orders</h2>
              <div class="order">
                  <h3>Order #${order.id}</h3>
                  <div>Color: ${order.colorId}</div>
                  <div>Interior: ${order.interiorId}</div>
                  <div>Technology Package: ${order.technologyId}</div>
                  <div>Wheels: ${order.wheelId}</div>
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
