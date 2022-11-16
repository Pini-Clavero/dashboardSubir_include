import { useEffect, useState } from 'react';

export default function ProductsTotal() {
    // Cantidad de productos
    const [countProducts, setCountProducts] = useState([]);
    useEffect(() => {
        const url = "/api/products";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountProducts(data.count)
            })
    }, []);

    return (
        <><div>
            {/* <h5>Total de productos</h5> */}
            {!countProducts ? "cargando..." : countProducts}
        </div>
        </>

    )

}