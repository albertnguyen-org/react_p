import React from 'react';
// import { CusButton } from 'corecomponents';
import {
    Link,
} from 'react-router-dom';


export interface MainPageType {
    path: string,
    label: string,
    isActive?: boolean,
    isExternalLink?: boolean
}

const Paths: MainPageType[] = [
    {
        path: "/dashboard",
        label: "Dashboard"
    },
    {
        path: "/ne",
        label: "Natural Environment"
    },
    {
        path: "/login",
        label: "Login"
    },
    {
        path: "https://sr-albert.github.io/manscaped_test/",
        label: "Manscaped test",
        isExternalLink: true
    },
    {
        path: "https://sr-albert.github.io/portfolio/",
        label: "Portfolio",
        isExternalLink: true
    },

]
const MainPage = () => {
    return (
        <div className='home-container'>
            <ul>
                {
                    Paths.map((item) => {
                        if (item.isExternalLink) {
                            return <li> <a href={item.path} target="_blank">{item.label}</a></li>
                        }
                        return <li><Link to={item.path}>{item.label}</Link></li>
                    })
                }
            </ul>
        </div>
    );
}

export default MainPage;