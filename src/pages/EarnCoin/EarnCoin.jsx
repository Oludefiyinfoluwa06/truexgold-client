import { useState, useEffect } from 'react';
import './EarnCoin.css';
import Logo from '../../assets/img/truexLogo.png';
import Nav from '../../components/Nav';
import Value from '../../components/Value';
import Special from '../../assets/img/special.png';
// import Invite from '../../assets/img/friendinvite.png';
import { useTruex } from '../../contexts/useTruex';

const EarnCoins = () => {
    const [points, setPoints] = useState(0);
    // const [energy, setEnergy] = useState(2532);
    // const [clicks, setClicks] = useState([]);
    const userData = JSON.parse(localStorage.getItem('user'));

    // const pointsToAdd = 12;
    // const energyToReduce = 12;

    const { getUserData, user, fetchTasks, tasks, completeTask } = useTruex();

    useEffect(() => {
        const getUser = async () => {
            await getUserData(userData._id);
        };

        getUser();
    }, [getUserData, userData._id]);

    useEffect(() => {
        if (user) {
            setPoints(user.totalCoins);
        }
    }, [user]);

    useEffect(() => {
        const getTasks = async () => {
            await fetchTasks();
        }

        getTasks();
    }, []);
  
    // const handleClick = (e) => {
    //   if (energy - energyToReduce < 0) {
    //     return;
    //   }
    //   const rect = e.currentTarget.getBoundingClientRect();
    //   const x = e.clientX - rect.left;
    //   const y = e.clientY - rect.top;
  
    //   setPoints(points + pointsToAdd);
    //   setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
    //   setClicks([...clicks, { id: Date.now(), x, y }]);
    // };
  
    // const handleAnimationEnd = (id) => {
    //   setClicks((prevClicks) => prevClicks.filter(click => click.id !== id));
    // };
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setEnergy((prevEnergy) => Math.min(prevEnergy + 1, 6500));
    //   }, 1000); // Restore 10 energy points every second
  
    //   return () => clearInterval(interval); // Clear interval on component unmount
    // }, []);


  return (
    <div className="earn-coins">
        <div className="first">
            <Value />
            <div className="Amount">
                <img src={Logo} alt="Amount" />
                <span className="points-text">{points.toLocaleString()}</span>
            </div>
            <span className="earn-more-coins">Earn more coins</span>
        </div>

      
        <div className="task-section">
            <div className="special-task">
                <h3 className="task-title">Special Task:</h3>
                {/* <h2>hello</h2> */}
                {tasks ? (
                    <div>
                        {tasks.map(task => (
                            <div key={task._id} className="task">
                                <div className="leftTask">
                                    <img src={Special} alt="specialLogo" className='firstLogo' />
                                    <div className="writeUp">
                                        <p>{task.title}</p>
                                        <div className="AmountGiven">
                                            <img src={Logo} alt="AmountLogo" />
                                            <p>{task.reward}</p>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    onClick={async () => await completeTask(userData._id, task._id)} 
                                    disabled={user?.completedTasks.includes(task._id)}
                                >
                                    {user?.completedTasks.includes(task._id) ? 'Completed' : 'Go'}
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>There are no tasks</div>
                )}
            </div>

        <br />

        {/* <div className="ref-task">
        <br />
            <h3 className="task-title">Refferal Task:</h3>
            <div className="task">
                <div className="leftTask">
                    <img src={Invite} alt="specialLogo" className='firstLogo'/>
                    <div className="writeUp">
                        <p>Invite 1 friend</p>
                        <div className="AmountGiven">
                            <img src={Logo} alt="AmountLogo" />
                            <p>700 000</p>
                        </div>
                    </div>
                </div>
                <a href="https://twitter.com" className='go'>Claim</a>
            </div>

            <div className="task">
                <div className="leftTask">
                    <img src={Invite} alt="specialLclaim" className='firstLogo'/>
                    <div className="writeUp">
                        <p>Invite 2 friends</p>
                        <div className="AmountGiven">
                            <img src={Logo} alt="AmountLogo" />
                            <p>700 000</p>
                        </div>
                    </div>
                </div>
                <a href="https://twitter.com" className='go'>Claim</a>
            </div>

            <div className="task">
                <div className="leftTask">
                    <img src={Invite} alt="specialLogo" className='firstLogo'/>
                    <div className="writeUp">
                        <p>Invite 3 friends</p>
                        <div className="AmountGiven">
                            <img src={Logo} alt="AmountLogo" />
                            <p>700 000</p>
                        </div>
                    </div>
                </div>
                <a href="https://twitter.com" className='go'>Claim</a>
            </div>

            <div className="task">
                <div className="leftTask">
                    <img src={Special} alt="specialLogo" className='firstLogo'/>
                    <div className="writeUp">
                        <p>Invite 5 friends</p>
                        <div className="AmountGiven">
                            <img src={Logo} alt="AmountLogo" />
                            <p>700 000</p>
                        </div>
                    </div>
                </div>
                <a href="https://twitter.com" className='go'>Claim</a>
            </div>

        </div> */}
            
            
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <br /> */}


      
        <nav className="bottom-nav">
            <Nav />
        </nav>
    </div>
  );
};

export default EarnCoins;
