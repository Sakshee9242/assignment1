import React, { useEffect, useState } from 'react'

function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
     
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount1(prevCounter => {
                if (prevCounter === 900) {
                    clearInterval(intervalId);
                    return prevCounter;
                } else {
                    return prevCounter + 1; 
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount2(prevCounter => {
                if (prevCounter === 1500) {
                    clearInterval(intervalId);
                    return prevCounter;
                } else {
                    return prevCounter + 1; 
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount3(prevCounter => {
                if (prevCounter === 1660) {
                    clearInterval(intervalId);
                    return prevCounter;
                } else {
                    return prevCounter + 1; 
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount4(prevCounter => {
                if (prevCounter === 860) {
                    clearInterval(intervalId);
                    return prevCounter;
                } else {
                    return prevCounter + 1; 
                }
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <div>
       <section className='counts'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className='count-box'>
                    <i className="fas fa-users"></i>
                    <p className='counter'> {count1} </p>
                    <p>Happy Clients</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className='count-box'>
                    <i className="far fa-images"></i>
                    <p className='counter'> {count2}</p>
                    <p>Projects</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className='count-box'>
                    <i className="fas fa-headset"></i>
                    <p className='counter'>{count3}</p>
                    <p>Hours Of Support</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className='count-box'>
                    <i className="fas fa-user-tie"></i>
                    <p className='counter'>{count4}</p>
                    <p>Hard Workers</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
    </div>
  )
}

export default Counter
