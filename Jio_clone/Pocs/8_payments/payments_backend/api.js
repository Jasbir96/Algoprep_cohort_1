const express = require('express');
const app = express();
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const ShortId = require("short-unique-id");
const cors = require("cors")
dotenv.config();
const { PORT, RAZORPAY_PUBLIC_KEY,
    RAZORPAY_PRIVATE_KEY } = process.env
const uid = new ShortId({ length: 10 })


const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_PUBLIC_KEY,
    key_secret: RAZORPAY_PRIVATE_KEY
})
app.get("/", (req, res) => {
    console.log("get route is working");
    res.status(200).json({
        message: "recieved req"
    })
})
// you are allowing any user to access your server as cross origin 
app.use(cors());
app.use(express.json());

app.post("/checkout", async (req, res) => {
    try {
        const amount = 100;
        const currency = "INR";
        const receipt = `rp_${uid.rnd()}`;

        const orderConfig = {
            amount: amount * 100,
            currency: currency,
            receipt: receipt
        }
        const order = await razorpayInstance.orders.create(orderConfig);
        console.log("order", order);
        res.status(201).json({
            status: "success",
            order: order
        })
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
})
app.post("/verify", function () {
    //  that payemnt is done -> razorpay
    // update the status of the user -> order , premium 
})

app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`);
})