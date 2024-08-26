import React, { useContext } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

const Sidebar = () => {
    const { setCurrentMode } = useContext(LibraryContext);
    return (
        <div style={{ display: 'flex', height: '200vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Menu
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact="true" to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/books" activeClassName="activeClicked" onClick={() => setCurrentMode('book')}>
                            <CDBSidebarMenuItem icon="book">Book</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/authors" activeClassName="activeClicked" onClick={() => setCurrentMode('author')}>
                            <CDBSidebarMenuItem icon="male">Author</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;