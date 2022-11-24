import connectDB from "../../middleware/mongodb";
import Customer from "../../models/cutomers";

export default connectDB(async function  handler(req, res) {
  if (req.method === "POST") {
    const { name, email, destination, travellerCount, currency } = req.body;
    if (!name || !email || !destination || !travellerCount || !currency)
      return res
        .status(400)
        .json({ error_msg: "Parameter missing", error_code: 1 });
    try {
      const customer = new Customer({
        name,
        email,
        destination,
        travellerCount,
        currency,
      });
      const customerCreated = await customer.save();
      return customerCreated
        ? res
            .status(200)
            .json({ error_code: 0, error_msg: "Data Added Successfully" })
        : res
            .status(400)
            .json({ error_code: 1, error_msg: "Something went wrong" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error_code: 1, error_msg: "Internal Server Error" });
    }
  }
})
