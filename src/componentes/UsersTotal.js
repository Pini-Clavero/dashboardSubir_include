import { useEffect, useState } from 'react';

export default function Users() {
    // const [users, setUsers] = useState([]);
    const [countUsers, setCountUsers] = useState([]);

    // useEffect(() => {
    //     const url = "/api/users";
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data.users)
    //         })
    // }, []);

    //Cantidad de usuarios
    useEffect(() => {
        const url = "/api/users";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountUsers(data.count)
            })
    }, []);
    return (
        <><div>
                {/* <h5>Total de usuarios registrados</h5> */}
                {!countUsers ? "cargando..." : countUsers}
            </div></>
    )
}