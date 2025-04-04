const Razorpay = require("razorpay");
const UserModel = require("../model/UserModel");

const razorpay = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

// create the order so that user can checkout on frontend 
const getPaymentController = async (req, res) => {
    try {
        const data = await razorpay.orders.create({
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: "Receipt_Id" + Date.now(),
        });
        res.json({
            amount: data.amount,
            orderId: data.id,
        });
    } catch (err) {
        console.log(err);
    }
};

// updation of status of premium access
const updatePremiumAccessController = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.premiumAccess = true;
        //  find and update the user with the new premium access status
        await UserModel.findOneAndUpdate(
            { email: email },
            { $set: { isPremium: true } },
            { new: true }
        );
        res.json({ message: { isPremium: true } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getPaymentController,
    updatePremiumAccessController,
};

