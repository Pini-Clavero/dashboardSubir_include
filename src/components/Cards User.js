import React from "react"
import LastUser from "../componentes/LastUser"
import UsersList from '../componentes/UsersList'
import CountByCategory from '../componentes/CountByCategory';


function CardsUser() {
    return (
        <div className="container d-flex  w-100 align-item-center">
            <div className="row h-100 w-100 justify-content-center ">
                <div className="col-md-6">
                    <LastUser />
                </div>
                <div className="col-md-5">
                    {/* <CountByCategory /> */}
                    <UsersList />
                </div>    
            </div>
        </div>
    )
}

export default CardsUser