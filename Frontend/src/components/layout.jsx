import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/topbar";
import Sidebar from "../components/slidebar";
import "./css/layout.css";

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="topbar">
          <TopBar
            onSearch={(q) => setSearchQuery(q)}
            onToggleFilter={() => setShowFilters(prev => !prev)}
          />
        </div>
        <div className="page-content">
          <Outlet context={{ searchQuery, showFilters }} />
        </div>
      </div>
    </div>
  );
}
