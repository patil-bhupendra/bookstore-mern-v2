// const Order = require("./order.model");

// const createAOrder = async (req, res) => {
//   try {
//     const newOrder = await Order(req.body);
//     const saveOrder = await newOrder.save();
//     res.status(200).json(saveOrder);
//   } catch (error) {
//     console.error("Error creating order", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// module.exports = {
//   createAOrder,
// };

const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    console.log("ORDER BODY:", req.body);

    const saveOrder = await Order.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: saveOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAOrder,
};
