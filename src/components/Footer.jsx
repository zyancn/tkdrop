import React from 'react';
import { Layout } from 'antd';
import { useLanguage } from '../contexts/LanguageContext';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const { language } = useLanguage();

  const footerTexts = {
    'zh-CN': '你的技能，从此无法伪造',
    'zh-TW': '你的技能，從此無法偽造',
    'en': 'Your Skills, Forever Verified'
  };

  return (
    <AntFooter style={{ 
      textAlign: 'center', 
      background: 'rgba(15, 23, 42, 0.8)', 
      color: '#94A3B8',
      borderTop: '1px solid rgba(56, 189, 248, 0.1)',
      fontFamily: 'Inter, sans-serif',
      padding: '24px 50px'
    }}>
      <div style={{ marginBottom: '8px' }}>
        VeriCred ©{new Date().getFullYear()} - {footerTexts[language]}
      </div>

    </AntFooter>
    );
};

export default Footer;