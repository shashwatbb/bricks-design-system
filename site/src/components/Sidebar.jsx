import React, { useState } from 'react';
import { Layout, Palette, Box, ChevronDown, ChevronRight, Download, PanelLeft } from 'lucide-react';
import { productionComponents } from '../data/loadRegistry';
import logo from '../assets/logo.png';
import './Sidebar.css';

// Foundations are the token collections in tokens/v1.2.0.
// Components come from REGISTRY.md: production status only.
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
      { label: 'Spacing', id: 'spacing' },
      { label: 'Radius', id: 'radius' },
      { label: 'Iconography', id: 'iconography' },
    ]
  },
  {
    icon: Box,
    label: 'Components',
    id: 'components',
    children: productionComponents.map((c) => ({
      label: c.name,
      id: `component-${c.name.toLowerCase()}`,
    }))
  },
];

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
          <PanelLeft size={20} />
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
        <a
          className="cta-button"
          href="https://github.com/shashwatbb/bricks-design-system"
          target="_blank"
          rel="noreferrer"
          title={isCollapsed ? 'Download kit' : ''}
        >
          <Download size={18} />
          {!isCollapsed && <span>Download kit</span>}
        </a>
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
