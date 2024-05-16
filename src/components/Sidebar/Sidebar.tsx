import {SidebarItem} from "./SidebarItem";
import style from "./sidebar.module.css";

export function Sidebar() {

    return (
        <>
            <div className={style.SidebarRoot}>
                <input type="checkbox" id="sidebar-checkbox" className={style.sidebarCheckbox}/>
                <label htmlFor="sidebar-checkbox" className={style.showButton}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#F5F5F5FF" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </label>

                <nav>
                    <div className={style.linksContainer}>
                        <SidebarItem link="/" className={style.homeButton}>Home</SidebarItem>

                        <div className={style.dropdownContainer}>
                            <label>Projects</label>
                            <ul>
                                <li><SidebarItem link="/projects/portfolio">Portfolio</SidebarItem></li>
                                <li><SidebarItem link="/projects/network">Network</SidebarItem></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}