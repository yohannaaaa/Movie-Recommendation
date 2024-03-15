import React from "react";
import "./Header.css"
export default function Header(){
    return(
        <div className="header">
            <h1 className="brandName"><span className="rec">Rec</span>ommend</h1>
            <div className="searchBox">
                <input type="text"  placeholder="search"></input>
                
            </div>
            <div className = "watchList">
                Watch list
            </div>
            <div className = "Favorites">
                Favorites
            </div>
            <button className="signOut">
                sign out
            </button>
        </div>
    );
}