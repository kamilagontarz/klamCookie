import React from 'react';

class MenuEntry {
    constructor(category, link) {
        this.category = category;
        this.link = link;
    }

}

class MenuList extends React.Component {
    render() {
        let categories = [new MenuEntry("Kategorie", "#"),
        new MenuEntry("Składniki", "#"),
        new MenuEntry("Pory roku", "#"),
        new MenuEntry("Okazje", "#"),
        new MenuEntry("Podstawy diety bezmięsnej", "#"),
        new MenuEntry("Wszystkie przepisy", "#"),
        new MenuEntry("About", "#")]
        const li = []
        for (let cat of categories) {
            li.push(<li><a href={cat.link}> {cat.category} </a></li>)
        }

        return <ul className="menuList"> {li} </ul>
    }
}

export default MenuList;