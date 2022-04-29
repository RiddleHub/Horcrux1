import { useSelector } from "react-redux";

function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-0 mb-1 bg-transparent">
            {/* <img src={'assets/'} style={{width:"100px"}} className="float-left"/> */}
            {state.loggedin.IsLoggedIn ?
            <>            
            {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
            <h4 className="text-center">Welcome ! {state.loggedin.Username}</h4> </>:
            <h4 className="text-center">Welcome to Just Shop Website</h4>}
            <div className="clearfix"></div>
        </div>
    )
}

export default Header;