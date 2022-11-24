import connectDB from "../../middleware/mongodb";
import Customer from "../../models/cutomers";

export default connectDB(async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const customers = await Customer.find({});
      return res.status(200).json({
        error_code: 0,
        error_msg: "Data Found",
        data: customers,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error_code: 1, error_msg: "Internal Server Error" });
    }
  }
});
