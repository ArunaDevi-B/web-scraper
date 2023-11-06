import React from "react";
import "./assert/css/Home.css";
import api from "./Common";

const Home = () => {
  const webScraper = async () => {
    const data = await api.wordCount();
    if (data.status == true) {
      setTimeout(() => {
        window.location.href = "history";
      }, 1000);
    } else {
      alert("Kindly enter the url");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Know the word count of the domain.</h2>
              </div>
              <div className="card-body">
                <div class="input-group mb-4">
                  <span class="input-group-text" id="basic-addon3">
                    https://example.com
                  </span>
                  <input
                    type="text"
                    class="form-control url_input"
                    id="basic-url"
                    aria-describedby="basic-addon3 basic-addon4"
                    required
                  />
                </div>
                <div className="d-flex">
                <button
                    type="submit"
                    className="btn text-light main-bg"
                    style={{ width: "60%" }}
                    onClick={() => {  window.location.href = "history"; }}
                  >
                    View History
                  </button>
                  <button
                    type="submit"
                    className="btn text-light main-bg"
                    style={{ width: "30%", marginLeft: "35%" }}
                    onClick={webScraper}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
