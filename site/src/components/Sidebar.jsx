import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Type, Palette, Box, Layers, Zap, Settings, ChevronDown, ChevronRight, Download, PanelLeft, PanelRight } from 'lucide-react';
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSection = (sectionId) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setExpandedSections([sectionId]);
      return;
    }
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Bricks Logo" className="logo-image" />
        {!isCollapsed && <h1 className="logo-text">Bricks</h1>}
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <PanelLeft size={20} /> : <PanelLeft size={20} />}
        </button>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <div key={item.id} className="nav-group">
            <button
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                if (item.children && item.children.length > 0) {
                  toggleSection(item.id);
                } else {
                  setActiveTab(item.id);
                }
              }}
              title={isCollapsed ? item.label : ''}
            >
              <item.icon size={20} className="nav-icon" />
              {!isCollapsed && <span className="nav-label">{item.label}</span>}
              {!isCollapsed && item.children && item.children.length > 0 && (
                <span className="chevron-icon">
                  {expandedSections.includes(item.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </span>
              )}
            </button>

            {/* Removed AnimatePresence and motion.div for instant rendering */}
            {!isCollapsed && item.children && item.children.length > 0 && expandedSections.includes(item.id) && (
              <div className="sub-menu">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    className={`sub-nav-item ${activeTab === child.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(child.id)}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="cta-container">
        <button className="cta-button" title={isCollapsed ? "Download Kit" : ""}>
          <Download size={18} />
          {!isCollapsed && <span>Download Kit</span>}
        </button>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">SB</div>
          {!isCollapsed && (
            <div className="user-info">
              <span className="user-name">Shashwat B.</span>
              <span className="user-role">Admin</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
