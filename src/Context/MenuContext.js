import React, { createContext } from 'react';

const MenuContext = createContext({
    menuIsOpen: false,
    setMenuIsOpen: () => {}
})

export default MenuContext;