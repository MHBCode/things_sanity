import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import { runFireworks } from '../library/utils';
import {useStateContext} from '../context/StateContext';


const success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = 
    useStateContext();
    useEffect(()=>{
            localStorage.clear();
            setCartItems([]);
            setTotalPrice(0);
            setTotalQuantities(0);
            runFireworks();
    },[])
  return (
    <div className='success-wraper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thanks for ordering!</h2>
            <p className='email-msg'>Check your Email for the receipt.</p>
            <p className='description'>
                please Email us for any questions.
                <a className='email' href='mailto:thebananajo@gmail.com'>
                    thebananajo@gmail.com
                </a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    Continue Shopping
                </button>
            </Link>

        </div>

    </div>
  )
}

export default success