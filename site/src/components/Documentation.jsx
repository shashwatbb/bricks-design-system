import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Documentation.css';
import introIllustration from '../assets/intro-illustration.png';
import typographyTokens from '../tokens/typography_tokens.json';

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
            case 'typography':
                const webTokens = typographyTokens.filter(t => t.platform === 'Web');
                const mobileTokens = typographyTokens.filter(t => t.platform === 'Mobile');
                const componentTokens = typographyTokens.filter(t => t.platform === 'Component');

                const renderTypographyTable = (tokens) => (
                    <div className="typo-table-container">
                        <table className="typo-table">
                            <thead>
                                <tr>
                                    <th>Preview</th>
                                    <th>Token</th>
                                    <th>Weight</th>
                                    <th>Size</th>
                                    <th>Line Height</th>
                                    <th>Tracking</th>
                                    <th>Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tokens.map((token, index) => (
                                    <tr key={index}>
                                        <td className="col-preview">
                                            <div 
                                                style={{
                                                    fontFamily: '"Google Sans Flex", sans-serif',
                                                    fontSize: token.fontSize,
                                                    lineHeight: '1',
                                                    fontWeight: token.fontWeight.split(' ')[1],
                                                    letterSpacing: token.letterSpacing || 'normal',
                                                    textTransform: token.name.includes('Overline') ? 'uppercase' : 'none'
                                                }}
                                            >
                                                Aa
                                            </div>
                                        </td>
                                        <td className="col-token">
                                            <code className="token-tag">{token.name}</code>
                                        </td>
                                        <td className="col-weight">{token.fontWeight.split(' ')[0]}</td>
                                        <td className="col-size">{token.fontSize}</td>
                                        <td className="col-lh">{token.lineHeight}</td>
                                        <td className="col-tracking">{token.letterSpacing || '0'}</td>
                                        <td className="col-usage">{token.usage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );

                return (
                    <div className="doc-section typography-page">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Typography
                        </motion.h1>
                        <motion.p 
                            className="lead-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Our typography system is built for clarity and impact using <strong>Google Sans Flex</strong>. 
                            It's designed to be scalable across Web and Mobile with a focus on readability and semantic structure.
                        </motion.p>

                        <div className="typo-sections">
                            <div className="platform-section">
                                <div className="platform-header">
                                    <span className="platform-tag">Desktop</span>
                                    <h2>Web Typography</h2>
                                </div>
                                {renderTypographyTable(webTokens)}
                            </div>

                            <div className="platform-section">
                                <div className="platform-header">
                                    <span className="platform-tag">Handheld</span>
                                    <h2>Mobile Typography</h2>
                                </div>
                                {renderTypographyTable(mobileTokens)}
                            </div>

                            <div className="platform-section">
                                <div className="platform-header">
                                    <span className="platform-tag">Universal</span>
                                    <h2>Component Typography</h2>
                                </div>
                                {renderTypographyTable(componentTokens)}
                            </div>
                            
                            <div className="typo-guide-section">
                                <h2>Usage Guidelines</h2>
                                <div className="guide-grid">
                                    <div className="guide-card">
                                        <h3>Consistency</h3>
                                        <p>Avoid creating one-off font sizes. Always use the predefined tokens to ensure a cohesive visual language across the product.</p>
                                    </div>
                                    <div className="guide-card">
                                        <h3>Hierarchy</h3>
                                        <p>Use Display and Heading styles to guide the user's attention. Ensure there is clear contrast between headings and body text.</p>
                                    </div>
                                    <div className="guide-card">
                                        <h3>Readability</h3>
                                        <p>Maintain proper line heights. Body text should use 1.5–1.6x for web to prevent eye fatigue during long reading sessions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="typo-guide-section accessibility-notes">
                                <h2>Accessibility Notes</h2>
                                <div className="accessibility-card">
                                    <ul>
                                        <li><strong>Base Size:</strong> 16px is the default body size for optimal readability.</li>
                                        <li><strong>Minimum Size:</strong> 12px is the minimum recommended readable size for web.</li>
                                        <li><strong>10px Restriction:</strong> 10px is strictly reserved for <code>Mobile / Utility / XS</code>. It should <strong>never</strong> be used for body text or important content.</li>
                                        <li><strong>Contrast:</strong> Ensure text colors meet WCAG 2.1 AA standards against their backgrounds.</li>
                                        <li><strong>Line Height:</strong> Avoid tight line heights on body text to support users with visual impairments.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="typo-token-json-section">
                                <h2>Typography Token JSON</h2>
                                <p>This JSON structure is used to sync design tokens with Figma and development environments.</p>
                                <div className="code-block-container">
                                    <div className="code-header">
                                        <span>typography_tokens.json</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-block">
                                        {JSON.stringify(typographyTokens.slice(0, 3), null, 2)}
                                        {"\n  // ... remaining tokens"}
                                    </pre>
                                </div>
                            </div>
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
