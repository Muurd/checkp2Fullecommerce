import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import '../pages/Products.css'


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

function Products() {
  const [Product, setProduct] = useState([])
  useEffect(() => {
    const showProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/getProducts")
        console.log(res.data)
        setProduct(res.data.AllProducts)
      } catch (error) {
        console.log(error)
      }
    }
    showProducts();
  }, [])
  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/products/deleteProduct/${productId}`);
      console.log(response.data);

      if (response.status === 200) {
        alert("Product has been deleted.");
        setProduct((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      } else {
        alert("Sorry, couldn't delete the product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("There was an error, could not delete the product.");
    }
  };
  return (
    <div>
      <Nav />
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {Product.map((product) => (
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={product._id}>
              <MDBCard>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">x1</p>
                  </div>
                </div>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  position="top"
                  alt={product.ProductName}
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        {product.color}
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>${product.price + 100}</s>
                      <button onClick={() => { console.log(product._id); deleteProduct(product._id); }}>Delete product</button>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{product.ProductName}</h5>
                    <h5 className="text-dark mb-0">${product.price}</h5>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">In Stock</span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Rating: <span className="fw-bold">4.5</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon far icon="star" />
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Products
