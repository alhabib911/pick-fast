import React, { useEffect, useState } from 'react';
import FlashSaleCard from './FlashSaleCard';

const FlashSale = () => {
    const [flashSale, setflashSale] = useState([])

    useEffect(()=>{
        fetch("flashsale.json")
        .then(res=>res.json())
        .then(data=>setflashSale(data))
    },[])
    return (
        <div>
            {
                flashSale.map(flashSale=><FlashSaleCard
                    flashSale={flashSale}
                    ></FlashSaleCard>
                    )
            }
        </div>
    );
};

export default FlashSale;