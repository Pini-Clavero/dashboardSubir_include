import { useEffect, useState } from 'react';

export default function LastProduct() {

  const [lastProduct, setlastProduct] = useState([]);
  const [imagen, setImagen] = useState([]);
  const [urlProduct, setUrlProduct] = useState([])

  //Último producto
  useEffect(() => {
    const url = "/api/products/lastproduct";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setlastProduct(data.product)
        setImagen(data.urlImagen)
        setUrlProduct(data.urlProduct)
      })
  }, []);

  return (
    <>
      {!lastProduct ? "cargando..." :

        <div className="card bg-transparent pt-3">
            <h5 className="card-body text-center mb-0">Último producto</h5>
          <img src={imagen} alt="imagen producto" />
          <div className="card-body text-light">
            <h4 className="card-title">{lastProduct.name}</h4>
            <ul>
              <li><b>Descripción:</b> {lastProduct.description}</li>
              <li><b>Categoría:</b> {lastProduct.categories?.category}</li>
              <li><b>Características:</b> {lastProduct.characteristics}</li>
              <li><b>Talles disponibles:</b> {lastProduct.sizes?.size}</li>
              <li><b>Colores disponibles:</b> {lastProduct.colors?.color}</li>
              <li><b>Precio:</b> ${lastProduct.price}</li>
            </ul>
            <a href={urlProduct} className="btn btn-outline-secondary rounded-0 w-80 text-center">Detalle del producto</a>
          </div>
        </div>
      }

    </>

  )


}
