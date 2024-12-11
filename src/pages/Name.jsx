import { persons } from '../persons.js'

export default function Person() {

    return (
        <>
            <div className="flexListName">
                <h1 className='titleName'>Tutti i nomi dei personaggi che troverai</h1>
                <ul>
                    {persons.map((name, i) => (
                        <li key={i}>{name.person}</li>
                    ))}
                </ul>
            </div>
        </>

    )
}