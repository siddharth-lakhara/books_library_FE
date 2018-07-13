import React from 'react';
import './sidebar.css';

const SideBar = ({ updateBooks })=>{
  return (
    <div className="sideBar">
      <div className="sideBar-text">
        Bs
        </div>
      <div className="sidebar-settings">
        <i className="material-icons" onClick={()=>{updateBooks();}}>refresh</i>
        <i className="material-icons">settings</i>
      </div>
    </div>
  );
}

export default SideBar;
