import React from 'react';
import { Link } from "react-router-dom";
//import Category from './Category';

class MenuEntry {
    constructor(category, link, linkTo) {
        this.category = category;
        this.link = link;
        this.linkTo = linkTo;
    }

}
// <Link to="/">klamCookie</Link>
class MenuList extends React.Component {
    render() {
        let categories = [
            new MenuEntry("Kategorie", "#", "kategorie"),
            new MenuEntry("Składniki", "#", "/skladniki"),
            new MenuEntry("Pory roku", "#", "/poryRoku"),
            new MenuEntry("Podstawy diety bezmięsnej", "#", "/podstawyWege"),
            new MenuEntry("Wszystkie przepisy", "#", "/wszystkiePrzepisy"),
            new MenuEntry("O projekcie", "#", "/about")
        ]
        const li = []
        for (let cat of categories) {
            li.push(<li><Link to={cat.linkTo}>{cat.category}</Link></li>)
            //li.push(<li><Link to={cat.LinkTo}><a href={cat.link}> {cat.category} </a></Link></li>)
        }

        return <ul className="menuList"> {li} </ul>

    }
}

export default MenuList;