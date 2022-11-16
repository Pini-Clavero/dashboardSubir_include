import { useEffect, useState } from 'react';

export default function LastUser() {

  const [lastUser, setlastUser] = useState([]);
  const [imagen, setImagen] = useState([]);

  //Último user
  useEffect(() => {
    const url = "/api/users/lastUser";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setlastUser(data)
        setImagen(data.avatarURL)
      })
  }, []);

  return (
    <>
      {!lastUser ? "cargando..." :

        <div className="card bg-transparent pt-3">
            <h5 className="card-body text-center mb-0">Último usuarix creado</h5>
          <img src={imagen} alt="imagen user" />
          <div className="card-body text-light">
            <h4 className="card-title">{lastUser.userName}</h4>
            <ul>
              <li><b>Nombre completo:</b> {lastUser.name + " " + lastUser.lastName}</li>
              <li><b>Email:</b> {lastUser.email}</li>
              <li><b>ID:</b> {lastUser.id}</li>
            </ul>
          </div>
        </div>
      }

    </>

  )


}
