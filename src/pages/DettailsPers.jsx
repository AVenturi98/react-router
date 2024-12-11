import { useParams } from "react-router-dom"
// import Card from '../components/card/Card'
import { useEffect } from "react"

export default function DettailsPers() {

    const { id, person, image, quote } = useParams()

    useEffect(() => {

    }, [id])

    return (
        <>
            {id}
            <h1>{person}</h1>
            <figure><img src={image} alt="" /></figure>
            <h2 className="listItem">{quote}</h2>
            {/* <Card person={person} quote={quote} id={id} /> */}
        </>
    )
}