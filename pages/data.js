import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/getCustomers");
      setFetchedData(response.data.data);
      console.log(response.data.data);
    })();
  }, []);
  return (
    <>
      <Link href="/" className="back">
        {" "}
        Home
      </Link>
      <div className="table_wrapper">
        <table>
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Destination</th>
              <th>Traveller Count</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.length > 0 ? (
              fetchedData.map(
                ({ name, email, destination, currency, travellerCount }) => (
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{destination}</td>
                    <td>{travellerCount}</td>
                    <td>{currency}</td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default data;
