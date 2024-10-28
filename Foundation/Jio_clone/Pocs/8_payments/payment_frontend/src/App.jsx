
import './App.css';

function loadScript() {
  return new Promise(function (resolve, reject) {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve();
    }
    script.onerror = () => {
      reject(err);
    }
    document.body.appendChild(script);
  })
}

function App() {

  async function openRazorPayCheckout() {
    try {
      // 1. making request to backend
      const resp = await
        fetch("http://localhost:3400/checkout",
          { method: "POST" });
      const data = await resp.json();
      const order = data.order;
      // load razorpayscript
      await loadScript();

      const finalOrderObject = {
        key: "rzp_test_S0AQgloJHdsOY4",
        "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": order.currency,
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://picsum.photos/200/300",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
        },
        "prefill": {
          "name": "Jasbir",
          "email": "Jasbir@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      }
      // order create 
      const rzp1 = new Razorpay(finalOrderObject);
      rzp1.open();
      // // error handling
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

    } catch (err) {

    }


  }


  return (
    <>
      <h1>Payment DEMO</h1>
      <a style={{ cursor: "pointer" }}
        onClick={openRazorPayCheckout}
      > Pay for 100</a>
    </>
  )
}

export default App
