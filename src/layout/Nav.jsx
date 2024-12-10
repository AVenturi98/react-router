import { NavLink } from "react-router-dom";

export default function Nav() {

    return (

        <>
            <ul id="listNav">
                <li>
                    <NavLink to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/name'>Person</NavLink>
                </li>
                <li>
                    <NavLink to='/character'>Character</NavLink>

                </li>
            </ul>

        </>
    )
}