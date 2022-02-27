import React from 'react';

// import primary style
import "../styles/main-style.scss"
const AppLayout = ({ children }) => {
    return (
        <div className="body">
            {children}
        </div>
    );
}

export default AppLayout;