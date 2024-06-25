import React, { useState } from 'react';
import './InviteFriends.css';
import Nav from '../../components/Nav';


const InviteFriends = () => {

  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopyLink = () => {
    const inviteLink = "https://t.me/TRUEXGOLD_mirror_1_bot";
    
    // Create a temporary textarea element to facilitate copying
    const textarea = document.createElement('textarea');
    textarea.value = inviteLink;
    document.body.appendChild(textarea);
    
    // Copy the link
    textarea.select();
    document.execCommand('copy');
    
    // Clean up
    document.body.removeChild(textarea);

    // Update button text and show copied message
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 3000);
  };



  return (
    <div className="invite-friends-page">
      <h1>Invite friends!</h1>
      <p>You and your friend will receive bonuses</p>

      <div className="invite-link-container">
        <p>My invite link:</p>
        <div className="invite-link-box">
          <a href="https://t.me/TRUEXGOLD_mirror_1_bot" target="_blank" rel="noopener noreferrer">
            https://t.me/TRUEXGOLD_mirror_1_bot
          </a>
          <button className="copy-button" onClick={handleCopyLink}>{copyButtonText}</button>
        </div>
      </div>

      <div className="friends-list">
        <p>List of My Friends:</p>
        {/* Add your friends list here */}
      </div>


      
      <Nav />
     

      
    </div>
  );
};

export default InviteFriends;
