
function Product(props){
    const {x,showModal}=props
    return (
        <div className="col-sm-3 col-md-3" key={x.prodid}>
            <div className="card text-center mb-3 bg-transparent">
                <div className="card-header p-0 border-bottom">
                    <h5>{x.pname}</h5>
                </div>
                <div className="card-body p-1">
                <img style={{width:"100%",height:"250px",marginBottom:"10px"}} src={"http://localhost:8080/"+x.photo} className="img-thumnail" />
                <h6 className="float-left">Brand :{x.brand}</h6>                
                <h6 className="float-right">Price: &#8377; {x.price}</h6>                           
                </div>
                <div className="card-footer p-1">
                    <button onClick={e=>showModal(x)} className="btn btn-primary btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;