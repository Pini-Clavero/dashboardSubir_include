import { useEffect, useState } from 'react'; 
export default function CategoriesTotal() {
    const [countCategories, setCountCategories] = useState([]);

    // Cantidad de categorias
  useEffect(() => {
    const url = "/api/products"; 
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let categories = Object.keys(data.countByCategory).length
      setCountCategories(categories)
    })
  },[]);

  return (
    <div>
        {/* <h5>Total de categorías de productos</h5> */}
        {!countCategories ? "cargando..." : countCategories }
      </div>
  )

}