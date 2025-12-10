import React from 'react';
import FubuniChat from '../../components/FubuniChat/FubuniChat';

const FubuniChatInjector = () => {
  const backendUrl = process.env.NODE_ENV === 'production' 
    ? 'https://ary-s-physical-humanoid-robotics.vercel.app'  // Your actual Vercel URL
    : 'http://localhost:8000';
  
  return <FubuniChat backendUrl={backendUrl} />;
};

export default FubuniChatInjector;