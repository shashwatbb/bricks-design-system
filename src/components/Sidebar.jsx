import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Type, Palette, Box, Layers, Zap, Settings } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: Layout, label: 'Introduction', id: 'intro' },
  { icon: Palette, label: 'Colors', id: 'colors' },
  { icon: Type, label: 'Typography', id: 'typography' },
  { icon: Box, label: 'Components', id: 'components' },
  { icon: Layers, label: 'Layouts', id: 'layouts' },
  { icon: Zap, label: 'Patterns', id: 'patterns' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

import logo from '../assets/logo.png';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Bricks Logo" className="logo-image" />
        <h1 className="logo-text">Bricks</h1>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon size={20} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">SB</div>
          <div className="user-info">
            <span className="user-name">Shashwat B.</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
