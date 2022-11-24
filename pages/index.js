import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState({
    code: "",
    msg: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    let a = Array.from(e.target);

    a.map((e) => (formData[e.name] = e.value));
    try {
      const response = await axios.post("/api/addCustomer", formData);
      setStatus({ code: "status-success", msg: response.data.error_msg });
    } catch (error) {
      setStatus({ code: "status-error", msg: error.response.data.error_msg });
    }

    setTimeout(() => {
      setStatus({
        code: "",
        msg: "",
      });
    }, 3000);
    // e.target.map((elem) => (formData[elem.key] = elem.value));
    // console.log(formData);
  };
  return (
    <>
      {status.code ? <h3 className={status.code}>{status.msg}</h3> : null}
      <div className="form-container">
        <form className="form" onSubmit={onSubmit} name="sampleForm">
          <h3 className="heading">Sample form</h3>
          <input
            className="inputBox"
            type="text"
            name="name"
            required
            placeholder="Enter name"
          />
          <input
            className="inputBox"
            type="email"
            name="email"
            required
            placeholder="Enter email address"
          />
          <input
            className="inputBox"
            type="text"
            name="destination"
            required
            placeholder="Enter your location"
          />
          <input
            className="inputBox"
            type="text"
            name="travellerCount"
            required
            placeholder="Enter number of travellers"
          />
          <input
            className="inputBox"
            type="text"
            name="currency"
            required
            placeholder="Budget per person"
          />
          <input className="submit" type="submit" value="Submit" />

          <Link href="/data" className="hyperlink"> Click to home</Link>
        </form>
      </div>
    </>
  );
}
