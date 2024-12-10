import { quotes } from '../data'

export default function Person() {

    return (
        <>
            <ul>
                {quotes.map((name, i) => (
                    <li key={i}>{name.person}</li>
                ))}
            </ul>
        </>

    )
}