import { useMemo, useState } from "react"

export default function Memo() {
    const [conteuro, setConteuro] = useState(0)
    const [conteurw, setConteurw] = useState(0)

    const chengeone = () => { setConteuro(p => p + 1) }
    const chengetow = () => { setConteurw(p => p + 1) }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return conteuro % 2 == 0
    }
        , [conteuro])



    return (
        <div>
            <button onClick={chengeone}>{conteuro}</button> <br />
            {isEven ? 'event' : 'old'} <br />
            <button onClick={chengetow}>{conteurw}</button>
        </div>
    )
}

