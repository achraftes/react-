import { useEffect, useState } from "react"

export default function Effect() {
    const [inputvalue, setInputvalue] = useState('')
    const [users, setUsers] = useState([])
    const [filterdusers, setFilterdusers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        return () => { return false }
    }, [])


    useEffect(() => {
        setFilterdusers(users)
    }, [users])

    useEffect(() => {
        if (users.length > 0) {
            console.log(users)
        }
    }, [users])

    useEffect(() => {
        const filter = users.filter(
            user => user.name.toLowerCase().includes(inputvalue)
        )
        setFilterdusers(filter)
    }, [inputvalue])

    //const update = () => setUsers(x => x + 1)
    /* const filter = users.filter(
         user => user.name.toLowerCase().includes(e.target.value)
     )
     setFilterdusers(filter)*/



    return (
        <>
            <input type="text" className="search" onInput={e => setInputvalue(e.target.value)} />

            {filterdusers.map(
                user => <h3 key={user.id}>
                    {user.name}</h3>
            )}

        </>
    )
}
