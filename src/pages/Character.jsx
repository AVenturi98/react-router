import { quotes } from '../data'

export default function Character() {

    return (
        <>
            <ul>
                {quotes.map((name, i) => (
                    <li key={i}>
                        {name.person}
                        <ul>
                            <li>{name.quote}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>

    )
}