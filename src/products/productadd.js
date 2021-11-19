// import { Helmet } from "fusion-plugin-react-helmet-async";
// import $ from 'jquery'; 

import React, {useEffect} from "react";
import Modal from "react-bootstrap/Modal";
// import { MDBDataTableV5 } from 'mdbreact';
// var tabledata = null;

const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%',

}

const tdStyle = {
  	border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
  	border: '1px solid #3498DB',
    
    background: '#3498DB',
  	color: 'white',
    padding: '5px'
};

export default function Productadd() {
    // getToken()
    const [isOpen, setIsOpen] = React.useState(false);
    var [data,setData] = React.useState([])
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const fetchInventory = () => {
        fetch('http://localhost:7000/api/listproduct')
            .then(res => res.json())
            .then(json => setData(json));
    }
    useEffect(() => {
        fetchInventory();
    }, []);

    let name = React.createRef();
    let pricr = React.createRef();
    let brand = React.createRef();
    let quality = React.createRef();
    let mdate = React.createRef();
    let edate = React.createRef();
    let disc = React.createRef();
    // getdata()
    let onOnclickHandler = (e) => {
        var obj = {
            productname: name.current.value,
            productprice: pricr.current.value,
            brand: brand.current.value,
            quality: quality.current.value,
            manufacturingDate: mdate.current.value,
            expireDate: edate.current.value,
            discription: disc.current.value,
            accid:'12345'
        }
        addusers(obj)
    };


    return (

        < div className="container-fluid mt-5 ml-4">
        < div style={ { marginLeft: "234px" } }>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-8">
                            </div>
                                < div className="col-4 text-end">
                                    < button className="btn btn-outline-info" onClick={ showModal }> Add
                                        </button>
                                            <Modal show={ isOpen } onHide={ hideModal }>
                                                <Modal.Header>
                                                    <Modal.Title> Add Product </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="pname"> Product Name
                                                                </label>
                                                                    < input type="text" ref={ name } class="form-control" id="pname" />
                                                                    </div>
                                                                        <div class="form-group">
                                                                            < label for="brand"> Brand Name
                                                                                </label>
                                                                                    < input type="text" ref={ brand } class="form-control" id="brand" />
                                                                                    </div>
                                                                                        < div class="form-group">
                                                                                            < label for="price"> Product Price
                                                                                                </label>
                                                                                                    < input type="text" ref={ pricr } class="form-control" id="price" />
                                                                                                    </div>
                                                                                                        < div class="form-group">
                                                                                                            < label for="quality"> Product Quantity
                                                                                                                </label>
                                                                                                                    < input type="text" ref={ quality } class="form-control" id="quality" />
                                                                                                                    </div>
                                                                                                                        < div class="form-group">
                                                                                                                            < label for="mdate"> M - Date
                                                                                                                                </label>
                                                                                                                                    < input type="date" ref={ mdate } class="form-control" id="mdate" />
                                                                                                                                    </div>
                                                                                                                                        < div class="form-group">
                                                                                                                                            < label for="edate"> E - date
                                                                                                                                                </label>
                                                                                                                                                    < input type="date" ref={ edate } class="form-control" id="edate" />
                                                                                                                                                    </div>
                                                                                                                                                        < div class="form-group">
                                                                                                                                                            < label for="description"> Discription
                                                                                                                                                                </label>
                                                                                                                                                                    < textarea type="text" ref={ disc } class="form-control" id="description" />
                                                                                                                                                                    </div>
                                                                                                                                                                        </form>
                                                                                                                                                                            </Modal.Body>
                                                                                                                                                                                < Modal.Footer>
                                                                                                                                                                                    < button className="btn btn-outline-info" onClick={ hideModal }> Cancel
                                                                                                                                                                                        </button>
                                                                                                                                                                                            < button className="btn btn-outline-info" onClick={ onOnclickHandler }> Save
                                                                                                                                                                                                </button>
                                                                                                                                                                                                    </Modal.Footer>
                                                                                                                                                                                                        </Modal>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Brand Name</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Describtion</th>
              <th style={thStyle}>ManufacturingDate</th>
              <th style={thStyle}>Expiretdate</th>
              <th style={thStyle}>Created Time</th>
              <th style={thStyle}>Updated Time</th>
            </tr>
            {data.map(({ productname,productprice, brand, quality,description,manufacturingdate,expiretdate,createt,updatett,id}) => (
              <tr key={id}>
                <td style={tdStyle}>{productname}</td>
                <td style={tdStyle}>{productprice}</td>
                <td style={tdStyle}>{brand}</td>
                <td style={tdStyle}>{quality}</td>
                <td style={tdStyle}>{description}</td>
                <td style={tdStyle}>{manufacturingdate}</td>
                <td style={tdStyle}>{expiretdate}</td>
                <td style={tdStyle}>{createt}</td>
                <td style={tdStyle}>{updatett}</td>
              </tr>
            ))}
          </tbody>
        </table>            
                                                                               {/* < MDBDataTableV5 hover entriesOptions={ [5, 20, 25] } entries={ 5 } pagesAmount={ 4 } data={ datatable } proSelect /> */}
                                                                                                                                                                                                                            </div>
                                                                                    </div>




    );





}

function addusers(obj) {
    const header=new Headers({'Content-Type':'application/json'});
    const requestOptions = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(obj)
    };
    fetch('http://localhost:7000/api/addproduct',requestOptions)
        .then(response => response.json())
        
}






function getdata() {
    fetch('http://localhost:7000/api/listusers')
        .then(async response => {

            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            // tabledata = data
            return data
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}