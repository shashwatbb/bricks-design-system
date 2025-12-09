import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Documentation.css';
import introIllustration from '../assets/intro-illustration.png';

const Documentation = ({ activeTab }) => {
    const renderContent = () => {
        switch (activeTab) {
            case 'intro':
                return (
                    <div className="doc-section">
                        <div className="intro-header">
                            <div className="intro-text">
                                <motion.h1
                                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    Introduction
                                </motion.h1>
                                <motion.p
                                    className="lead-text"
                                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                >
                                    Welcome to <strong>Bricks</strong>—the foundation that keeps Housing.com from crumbling into spaghetti code.
                                    It's our blueprint for building pixel-perfect, scalable interfaces without needing a building permit.
                                    Think of it as the cement that holds our pixels together, ensuring every button click feels like home.
                                </motion.p>

                                <motion.div
                                    className="intro-links"
                                    initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                >
                                    <a href="#principles" className="intro-link-item">
                                        <span>Principles</span>
                                        <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
                                    </a>
                                    <a href="#getting-started" className="intro-link-item">
                                        <span>Getting Started</span>
                                        <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
                                    </a>
                                    <a href="#resources" className="intro-link-item">
                                        <span>Resources</span>
                                        <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
                                    </a>
                                </motion.div>
                            </div>
                            <motion.div
                                className="intro-image-container"
                                initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            >
                                <img src={introIllustration} alt="Bricks Design Illustration" className="intro-image" />
                            </motion.div>
                        </div>
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
            </header>
            <div className="doc-content">
                {renderContent()}
            </div>
        </main>
    );
};

export default Documentation;
