import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashVid.css';
import Video from '../../assets/img/trueX.mp4';

const SplashVid = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleVideoEnd = () => {
      navigate('/landing');
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleVideoEnd);

    // Attempt to play the video in case it doesn't start automatically
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error('Error attempting to play video:', error);
      });
    }

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [navigate]);

  const handleScreenClick = () => {
    navigate('/landing');
  };

  return (
    <div className="video-container" onClick={handleScreenClick}>
      <video ref={videoRef} className="video" autoPlay muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashVid;
