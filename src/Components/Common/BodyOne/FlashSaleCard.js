import React from 'react';

const FlashSaleCard = (props) => {
    const{id, Name, OldPrice, picture, Offer, NewPrice} = props.flashSale
    return (
        <div>
            {id}
            <img src={picture} alt="" />
        </div>
    );
};

export default FlashSaleCard;