import React from "react";
import Users from '../componentes/UsersTotal';
import ProductsTotal from '../componentes/ProductsTotal';
import CategoriesTotal from '../componentes/CategoriesTotal';
import * as FaIcons from "react-icons/fa"

function SmallCard() {
    return (
        <div className="row w-100 m-auto justify-content-*-between row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 bg-transparent">
                    
                        <div className="card-body text-center rounded">
                            <h5>Total de usuarios registrados</h5>
                            <div className="flex justify-content-center aline-items-center">
                                <h4>
                                    <Users />
                                </h4>
                                <h4>
                                    <FaIcons.FaSmileWink className="p-1"/>
                                </h4>
                            </div>
                        </div>
                        
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-transparent">
                    
                        <div className="card-body text-center rounded">
                            <h5>Total de productos cargados</h5>
                            <div className="flex justify-content-center aline-items-center">
                                <h4>
                                    <ProductsTotal />
                                </h4>
                                <h4>
                                    <FaIcons.FaStore className="p-1"/>
                                </h4>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 bg-transparent">
                    
                        <div className="card-body text-center rounded">
                            <h5>Total de categorias de productos</h5>
                            <div className="flex justify-content-center aline-items-center">
                                <h4>
                                    <CategoriesTotal />
                                </h4>
                                <h4>
                                    <FaIcons.FaStream className="p-1"/>
                                </h4>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard