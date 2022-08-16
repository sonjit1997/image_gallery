import React, { useState } from "react";
import { GetImage, ResultImage } from "../api/Api";
import { Modal} from "react-bootstrap";
import "../style/Home.css";
const Home = () => {
  const [input, setInput] = useState("");
  const [outimage, setOutImage] = useState([]);
  const [results, setResults] = useState(false);
  const [img,setImg] = useState(["hello"]);
  const [userModal, setUserModal] = useState(false);


  const images = GetImage();

  const result = ResultImage(input);
  console.log(result);

  function search() {
    setResults(true);
    setOutImage(result);
  }

  const detail = (item) => {
 const imgdata=[item]
 setImg(imgdata)

    setUserModal(true)
    console.log(img)
  };
  const closeUserModal = () => {
    setUserModal(false);
  };

  return (
    <>
    <nav className="fixed-top">
      <div className="main">
        <div className="box">
          <h1 className="text text-success">IMAGE GALLERY</h1>
        </div>

        <ul
          className="nav nav-pills nav-fill bg-light p-0 small  border rounded-5 shadow-sm"
          id="pillNav"
        >
          <li className="nav-item d-flex p-2" role="presentation">
            <input
              className="nav-link rounded-p5 bg-light "
              id="input"
              placeholder="Search which you want to see"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn bg-light" onClick={search}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="red"
                class="bi bi-search mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      </nav>
      <div className="container">
        <div div className="row d-flex">
          {results
            ? outimage.map((product, indx) => (
                <div className="col-md-3 mt-4" key={indx}>
                  <div className="card h-100 text-center p-0">
                    <img
                      src={product.urls.thumb}
                      className="card-img-top"
                      height="250 px"
                      alt="abcd"
                      onClick={() => detail(product)}
                      onKeyPress={() => detail(product)}
                    />
                  </div>
                </div>
              ))
            : images.map((product, indx) => (
                <div className="col-md-3 mt-4" key={indx}>
                  <div className="card h-100 text-center p-0">
                    <img
                      src={product.urls.thumb}
                      className="card-img-top"
                      height="250 px"
                      alt="abcd"
                      onClick={() => detail(product)}
                      onKeyPress={() => detail(product)}
                      
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
      {userModal ? (
            <Modal
              show={userModal}
              onHide={closeUserModal}
              backdrop="static"
              centered
              
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body closeButton>
             
                {
                 img.map((big,index)=>(
                  <img
                      src={big.urls.thumb}
                      key={index}
                      className="card-img-top"
                      height="350 px"
                      alt="abcd"
                     
                    />
                  ))
                }
              </Modal.Body>
            </Modal>
          ) : (
            ""
          )}

    </>
  );
};

export default Home;
