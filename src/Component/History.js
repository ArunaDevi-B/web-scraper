import React, { useState, useEffect } from "react";
import "./assert/css/History.css";
import api from "./Common";

const History = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await api.fetchData();
    setData(response.data);
  }, []);
  console.log(data[0], "dataaaaa");

  const addFavourite = async (id, index) => {
    await api.addToFavourite(id);
  };

  const removeURL = async (id, index) => {
    await api.deleteURL(id);
  };
  return (
    <div>
      <div class="container">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>
                  Manage <b>History</b>
                </h2>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>S.No</th>
                <th>Domain Name</th>
                <th>Word Count</th>
                <th>Favourite</th>
                <th>Web Links</th>
                <th>Media Links</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="table-data">
              {data.map((ele, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{index + 1}</td>
                  <td>{ele.domain_name != "" ? ele.domain_name : "-"}</td>
                  <td>{ele.word_count != "" ? ele.word_count : "null"}</td>
                  <td>{ele.favourite == 0 ? "false" : "true"}</td>
                  <td>{ele["web-links"] != null ? ele["web-links"] : "-"}</td>
                  <td>
                    {ele["media-links"] != null ? ele["media-links"] : "-"}
                  </td>
                  <td>
                    <a href="" class="edit" data-toggle="modal">
                      <i
                        class="material-icons"
                        id={`url_id${ele.url_id}`}
                        data-toggle="tooltip"
                        title="Edit"
                        style={{
                          fontSize: "29px",
                          cursor: "pointer",
                          color: ele.favourite ? "red" : "black",
                        }}
                        onClick={() => addFavourite(ele.url_id, index)}
                      >
                        {ele.favourite ? "♥" : "♡"}
                      </i>
                    </a>
                    <a href="" class="delete" data-toggle="modal">
                      <i
                        class="material-icons"
                        id={`del_id${ele.url_id}`}
                        data-toggle="tooltip"
                        title="Delete"
                        onClick={() => removeURL(ele.url_id, index)}
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/" class="back" data-toggle="modal">
            <button
              type="submit"
              className="btn text-light main-bg"
              style={{ width: "40%", marginLeft: "30%" }}
            >
              Back
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default History;
