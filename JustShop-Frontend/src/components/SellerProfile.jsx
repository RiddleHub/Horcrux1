import axios from "axios"
import { useEffect, useState } from "react"
import "../SellerProfile.css"
function SellerProfile(){
    const id=sessionStorage.getItem("id")
    const [user,setUser]=useState({
        "id":sessionStorage.getItem("id"),
        "name":"",
        "city":"",
        "userid":"",
        "pwd":"",
        "phone":""
    })

    useEffect(()=>{
        axios.get("http://localhost:8080/api/sellers/"+id)
        .then(resp=>{
            console.log(resp.data.data)
            setUser(resp.data.data)
        })
    },[])
    return (
<div class="page-content page-container" id="page-content">
<h4 className="p-2" style={{borderBottom:"2px solid green",width:"300px",margin:"auto"}}>Seller Profile Page</h4>
<div class="padding">
    <div class="row container d-flex justify-content-center">
        <div class="col-xl-6 col-md-12">
            <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                        <div class="card-block text-center text-white">
                            <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                            <h6 class="f-w-600">Welcome {user.name}</h6>
                            <p>Seller</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="card-block">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">User Id: </p>
                                    <h6 class="text-muted f-w-400">{user.userid}</h6>
                                </div>
                                <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Contact No: </p>
                                    <h6 class="text-muted f-w-400">{user.phone}</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">City : </p>
                                    <h6 class="text-muted f-w-400">{user.city}</h6>
                                </div>                               
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

export default SellerProfile;
