
import { useEffect, useRef, useState } from "react"



export default function Ref() {
    const lastPara = useRef()
    const prempara = useRef()
    const mdown = () =>
        prempara.current.scrollIntoView({ behavior: "smooth", block: "start" })
    const moveDown = () => {
        lastPara.current.scrollIntoView({
            behavior: "smooth", block: "end"
        })
    }
    const [render, setRender] = useState(0)


    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
        console.log(count.current)
    }, [render])






    return (
        <div>
            <h1 ref={prempara}>Ref</h1>
            <button onClick={() => { setRender(prev => prev + 1) }}>new dawen</button>
            <h1>{render}</h1>
            <button onClick={moveDown}>partir en bas</button>
            <hr />

            <section>
                <img src="https://picsum.photos/200/400?grayscaler" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                    dignissimos consectetur
                    et repellat consequatur. Fugiat voluptates assumenda consequatur
                    tempore quo laboriosam distinctio
                    repellat? Omnis esse ipsam maiores quasi nostrum ex!</p>
            </section> <hr />
            <section>
                <img src="https://picsum.photos/200/200/?blur=2" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                    dignissimos consectetur
                    et repellat consequatur. Fugiat voluptates assumenda consequatur
                    tempore quo laboriosam distinctio
                    repellat? Omnis esse ipsam maiores quasi nostrum ex!</p>
            </section> <hr />
            <section>
                <img src="https://picsum.photos/id/237/200/300" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                    dignissimos consectetur
                    et repellat consequatur. Fugiat voluptates assumenda consequatur
                    tempore quo laboriosam distinctio
                    repellat? Omnis esse ipsam maiores quasi nostrum ex!</p>
            </section> <hr />
            <section>
                <img src="https://picsum.photos/200/300.jpg" />
                <p ref={lastPara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                    dignissimos consectetur
                    et repellat consequatur. Fugiat voluptates assumenda consequatur
                    tempore quo laboriosam distinctio
                    repellat? Omnis esse ipsam maiores quasi nostrum ex!</p>
            </section>
            <button onClick={mdown}>partir en bas</button>

        </div>
    )
}

