import { useState, useEffect } from 'react';
import './InviteFriends.css';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';
import { useTruex } from '../../contexts/useTruex';

const InviteFriends = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const [referralData, setReferralData] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));

  const { getUserData, user } = useTruex();

  useEffect(() => {
    const getUser = async () => {
      await getUserData(userData._id);
    };

    getUser();
  }, [getUserData, userData._id]);

  useEffect(() => {
    const fetchReferralData = async () => {
      if (user && user.referrals.length > 0) {
        const referralPromises = user.referrals.map(referralId => getUserData(referralId));
        const referrals = await Promise.all(referralPromises);
        setReferralData(referrals);
      }
    };

    fetchReferralData();
  }, [user, getUserData]);

  const handleCopyLink = () => {
    const inviteLink = `https://t.me/TruexgoldBot/miners/register?referrer=${userData._id}`;

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
          <Link to={`https://t.me/TruexgoldBot/miners/register?referrer=${userData._id}`} target="_blank" rel="noopener noreferrer">
            {`https://t.me/TruexgoldBot/miners/register?referrer=${userData._id}`}
          </Link>
          <button className="copy-button" onClick={handleCopyLink}>{copyButtonText}</button>
        </div>
      </div>

      <div className="friends-list">
        <p>List of My Friends:</p>
        {referralData.length > 0 ? (
          referralData.map((referral, index) => (
            <div key={index}>
              <p>{referral.user.username}</p>
            </div>
          ))
        ) : (
          <div>You have not invited anyone</div>
        )}
      </div>

      <nav className="bottom-nav">
        <Nav />
      </nav>
    </div>
  );
};

export default InviteFriends;
