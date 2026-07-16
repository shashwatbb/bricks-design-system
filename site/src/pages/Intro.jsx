import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import introIllustration from '../assets/intro-illustration.png';

const Intro = ({ setActiveTab }) => (
  <div className="doc-section">
    <div className="intro-header">
      <div className="intro-text">
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Introduction
        </motion.h1>
        <motion.p
          className="lead-text"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <strong>Bricks</strong> is the design system behind Housing.com.
          It defines the tokens, components, and rules that keep every interface consistent.
          Everything documented here is generated from the same source of truth designers build with in Figma.
        </motion.p>

        <motion.div
          className="intro-links"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <button type="button" className="intro-link-item" onClick={() => setActiveTab('colors')}>
            <span>Foundations</span>
            <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
          </button>
          <button type="button" className="intro-link-item" onClick={() => setActiveTab('component-button')}>
            <span>Components</span>
            <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
          </button>
          <button type="button" className="intro-link-item" onClick={() => setActiveTab('iconography')}>
            <span>Iconography</span>
            <ArrowRight className="arrow-icon" size={20} strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
      <motion.div
        className="intro-image-container"
        initial={{ opacity: 0, filter: 'blur(10px)', x: 20 }}
        animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <img src={introIllustration} alt="Bricks design illustration" className="intro-image" />
      </motion.div>
    </div>
  </div>
);

export default Intro;
