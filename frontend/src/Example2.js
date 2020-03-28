import React from 'react';

export default function Header({children}) { 
    return ( //<h1>{props.title}</h1>
        <header>
            <h1>{children}</h1> 
        </header>
    );
}
