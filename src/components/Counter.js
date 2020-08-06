import React, { useState, useEffect } from 'react';

const Counter = () =>{
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        console.log('COUNTER COMPONENT WAS MOUNT');    
        /* return (()=>{
            console.log('COUNTER COMPONENT WAS UNMOUNT');
        })  */   
    }, []);

    useEffect(()=>{
        console.log('Count value has changed');
    },[count]); 

    useEffect(()=>{
        return (()=>{
            console.log('COUNTER COMPONENT WAS UNMOUNT');
        })
    }, []);    

    return(

        <div className="compact-count">
            <section className="compact-controls">
                <button className="compact-button" onClick={()=> setCount(count + 1)}>Increment</button>
                <button className="compact-button"  onClick={()=> setCount(count - 1)}>Decrement</button>
            </section>
            <p className="count">{count}</p>
        </div>
    )
}

export default Counter;