import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Type, Palette, Box, Layers, Zap, Settings, ChevronDown, ChevronRight, Download } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  {
    icon: Layout,
    label: 'Introduction',
    id: 'intro',
    children: []
  },
  {
    icon: Palette,
    label: 'Foundations',
    id: 'foundations',
    children: [
      { label: 'Colors', id: 'colors' },
      { label: 'Typography', id: 'typography' },
      { label: 'Icons', id: 'icons' },
      { label: 'Shadows', id: 'shadows' },
    ]
  },
  {
    icon: Box,
    label: 'Components',
    id: 'components',
    children: [
      { label: 'Buttons', id: 'buttons' },
      { label: 'Inputs', id: 'inputs' },
      { label: 'Cards', id: 'cards' },
      { label: 'Modals', id: 'modals' },
    ]
  },
  {
    icon: Layers,
    label: 'Patterns',
    id: 'patterns',
    children: [
      { label: 'Forms', id: 'forms' },
      { label: 'Navigation', id: 'navigation' },
    ]
  },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

import logo from '../assets/logo.png';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [expandedSections, setExpandedSections] = useState(['foundations', 'components']);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Bricks Logo" className="logo-image" />
        <h1 className="logo-text">Bricks</h1>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <div key={item.id} className="nav-group">
            <motion.button
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                if (item.children && item.children.length > 0) {
                  toggleSection(item.id);
                } else {
                  setActiveTab(item.id);
                }
              }}
              whileHover={{ x: 2 }}
            >
              <item.icon size={18} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
              {item.children && item.children.length > 0 && (
                <span className="chevron-icon">
                  {expandedSections.includes(item.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </span>
              )}
            </motion.button>

            <AnimatePresence>
              {item.children && item.children.length > 0 && expandedSections.includes(item.id) && (
                <motion.div
                  className="sub-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.children.map((child) => (
                    <motion.button
                      key={child.id}
                      className={`sub-nav-item ${activeTab === child.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(child.id)}
                      whileHover={{ x: 2 }}
                    >
                      {child.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      <div className="cta-container">
        <button className="cta-button">
          <Download size={16} />
          <span>Download Kit</span>
        </button>
      </div>

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
