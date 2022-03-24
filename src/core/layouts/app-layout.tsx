import React from 'react';

// import primary style
import "core/styles/main-style.scss";

const AppLayout = (props: any) => {
    return (
        <div className="body">
            {props.children}
        </div>
    );
}

export default AppLayout;