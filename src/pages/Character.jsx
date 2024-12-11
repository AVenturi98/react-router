import { persons } from '../persons'

export default function Character() {

    return (
        <>
            <div className='flexListCharacter'>
                <h1 className='titleName'>Le frasi iconiche dei personaggi</h1>
                <ul>
                    {persons.map((name, i) => (
                        <li key={i}>
                            {name.person}
                            <ul>
                                <li className='listItem'>{name.quote}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}