import axios from 'axios'
import React, { useState } from 'react'
import Nav from '../components/Nav'

function Addproductform() {
    const [ProductName,setProductName] = useState('')
    const [color,setColor] = useState('')
    const [price,setPrice] = useState('')

    const addProduct = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/products',{ProductName,color,price})
            console.log(response.data)
            alert("product is added to the database");
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || 'Something went wrong');
            } else {
                alert('Error: Unable to reach the server');
            }
            console.error('Error details:', error);
        }
    }
    return (
        <div>
            <Nav/>
            <form onSubmit={addProduct}>
            <div className="form-outline" data-mdb-input-init>
                <input type="text" id="formControlLg" class="form-control form-control-lg" value={ProductName} onChange={(e)=>{setProductName(e.target.value)}} />
                <label className="form-label" htmlFor="formControlLg">Form control lg</label>
            </div>

            <div class="form-outline" data-mdb-input-init>
                <input type="text" id="formControlDefault" class="form-control" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
                <label className="form-label" htmlFor="formControlDefault">Form control default</label>
            </div>

            <div className="form-outline" data-mdb-input-init>
                <input type="text" id="formControlSm" class="form-control form-control-sm" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                <label className="form-label" htmlFor="formControlSm">Form control sm</label>
            </div>
            <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Addproductform
