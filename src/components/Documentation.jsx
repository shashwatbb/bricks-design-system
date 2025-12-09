import React from 'react';
import { motion } from 'framer-motion';
import './Documentation.css';
import introBanner from '../assets/intro-banner.png';

const Documentation = ({ activeTab }) => {
    const renderContent = () => {
        switch (activeTab) {
            case 'intro':
                return (
                    <div className="doc-section">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="intro-banner-container"
                        >
                            <img src={introBanner} alt="Bricks Design System" className="intro-banner" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Introduction
                        </motion.h1>
                        <motion.p
                            className="lead-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Welcome to <strong>Bricks</strong>, the comprehensive design system for Housing.com.
                            Bricks provides a unified language for our digital products, ensuring consistency,
                            accessibility, and a premium user experience.
                        </motion.p>

                        <motion.div
                            className="card-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="feature-card">
                                <h3>Principles</h3>
                                <p>Core values guiding our design decisions.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Getting Started</h3>
                                <p>How to use Bricks in your projects.</p>
                            </div>
                            <div className="feature-card">
                                <h3>Resources</h3>
                                <p>Downloads, kits, and tools.</p>
                            </div>
                        </motion.div>
                    </div>
                );
            case 'colors':
                return (
                    <div className="doc-section">
                        <h1>Colors</h1>
                        <p className="lead-text">Our color palette is designed to be accessible and vibrant.</p>
                        <div className="color-grid">
                            <div className="color-swatch primary"><span>Primary</span></div>
                            <div className="color-swatch secondary"><span>Secondary</span></div>
                            <div className="color-swatch accent"><span>Accent</span></div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="doc-section">
                        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                        <p className="lead-text">Documentation for {activeTab} is coming soon.</p>
                        <div className="placeholder-content">
                            <div className="skeleton-line w-75"></div>
                            <div className="skeleton-line w-50"></div>
                            <div className="skeleton-line w-100"></div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <main className="documentation">
            <header className="doc-header">
                <div className="breadcrumbs">Bricks / {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>
                <div className="header-actions">
                    <button className="btn-secondary">View Source</button>
                    <button className="btn-primary">Edit Page</button>
                </div>
            </header>
            <div className="doc-content">
                {renderContent()}
            </div>
        </main>
    );
};

export default Documentation;
