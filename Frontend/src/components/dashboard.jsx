import React from "react";
import Sidebar from "./slidebar";
import TopBar from "./topbar";
import "./css/layout.css";

export default function DashboardLayout({ children, onSearch, onToggleFilter }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <TopBar onSearch={onSearch} onToggleFilter={onToggleFilter} />
        <div className="page-content">{children}</div>
      </div>
    </div>  
  );
}
