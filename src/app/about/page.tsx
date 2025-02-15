'use client'

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import React from 'react';

const About: React.FC = () => {
    const {setTheme} = useTheme()
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            
            <h1>About Us</h1>
            <Button onClick={()=>{
                setTheme('dark')
            }}>Dark</Button>
                        <Button onClick={()=>{
                setTheme('light')
            }}>Light</Button>
                        <Button onClick={()=>{
                setTheme('system')
            }}>System</Button>
            <p>Welcome to our company! We are dedicated to providing the best service possible.</p>
            <p>Our team is composed of experienced professionals who are passionate about what they do.</p>
            <p>Thank you for visiting our website. We look forward to working with you!</p>
        </div>
    );
};

export default About;