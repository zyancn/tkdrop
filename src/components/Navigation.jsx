import React, { useState, useEffect } from 'react';
import { Menu, Layout, Typography, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Header } = Layout;
const { Title } = Typography;

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const { language, switchLanguage } = useLanguage();
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const menuItems = [
    { key: 'problem', label: 'The Problem', href: 'https://www.vericred.app/#problem', external: true },
    { key: 'how-it-works', label: 'How It Works', href: 'https://www.vericred.app/#how-it-works', external: true },
    { key: 'tokenomics', label: 'Tokenomics', href: 'https://www.vericred.app/#tokenomics', external: true },
    { key: 'community', label: 'Community', href: 'https://www.vericred.app/community', external: true },
    { key: 'website', label: 'Official Website', href: 'https://www.vericred.app', external: true },
  ];
  
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuVisible(false);
  };

  return (
    <>
      <Header 
        style={{ 
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 2rem',
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.8)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled 
            ? '1px solid rgba(56, 189, 248, 0.1)' 
            : 'none',
          transition: 'all 0.3s ease',
          height: '80px'
        }}
      >
        {/* Logo */}
        <Title 
          level={2} 
          style={{ 
            color: '#FFFFFF', 
            margin: 0, 
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5rem'
          }}
        >
          VeriCred
        </Title>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {menuItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  if (item.external) {
                    // 外部链接直接跳转
                    window.open(item.href, '_blank');
                    e.preventDefault();
                  } else {
                    // 内部锚点滚动
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                style={{
                  color: '#E2E8F0',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(30, 41, 59, 0.8)',
              borderRadius: '20px',
              padding: '4px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <div
                onClick={switchLanguage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  background: language === 'en' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                  color: language === 'en' ? '#FFFFFF' : '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                EN
              </div>
              <div
                onClick={switchLanguage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  background: language === 'zh-CN' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                  color: language === 'zh-CN' ? '#FFFFFF' : '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                简
              </div>
              <div
                onClick={switchLanguage}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  background: language === 'zh-TW' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                  color: language === 'zh-TW' ? '#FFFFFF' : '#94A3B8',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                繁
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          className="mobile-menu-btn"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(true)}
          style={{
            color: '#FFFFFF',
            fontSize: '1.25rem',
            display: 'none'
          }}
        />
      </Header>
      
      {/* Mobile Drawer */}
      <Drawer
        title="VeriCred"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        style={{
          background: '#0F172A'
        }}
        styles={{
          header: {
            background: '#0F172A',
            borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
            color: '#FFFFFF'
          },
          body: {
            background: '#0F172A',
            padding: '2rem 1rem'
          }
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {menuItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                if (item.external) {
                  // 外部链接直接跳转
                  window.open(item.href, '_blank');
                  e.preventDefault();
                  setMobileMenuVisible(false);
                } else {
                  // 内部锚点滚动
                  e.preventDefault();
                  scrollToSection(item.href);
                }
              }}
              style={{
                color: '#E2E8F0',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Language Switcher */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '25px',
                padding: '6px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                width: '100%'
              }}>
                <div
                  onClick={switchLanguage}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    height: '40px',
                    borderRadius: '20px',
                    background: language === 'en' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                    color: language === 'en' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  English
                </div>
                <div
                  onClick={switchLanguage}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    height: '40px',
                    borderRadius: '20px',
                    background: language === 'zh-CN' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                    color: language === 'zh-CN' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  简体中文
                </div>
                <div
                  onClick={switchLanguage}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    height: '40px',
                    borderRadius: '20px',
                    background: language === 'zh-TW' ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)' : 'transparent',
                    color: language === 'zh-TW' ? '#FFFFFF' : '#94A3B8',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  繁體中文
                </div>
              </div>
            </div>
        </div>
      </Drawer>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;