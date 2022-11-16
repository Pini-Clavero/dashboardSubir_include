import React from "react"
import LastProduct from "../componentes/LastProduct"
import ProductsList from '../componentes/ProductsList'
import CountByCategory from '../componentes/CountByCategory';


function Cards() {
    return (
        <div className="container d-flex  w-100 align-item-center">
            <div className="row w-100 justify-content-evenly ">
                <div className="col-md-5">
                    <LastProduct />
                </div>
                <div className="col-md-5">
                    <CountByCategory />
                    <ProductsList />
                </div>    
            </div>
        </div>
    )
}

export default Cards