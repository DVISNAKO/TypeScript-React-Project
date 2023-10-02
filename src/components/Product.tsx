import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    const [detais, setDetails]= useState(false);

    const changeBGClassName = detais ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', changeBGClassName]


    return (
        <div className='border py-2x px-4 rounded flex flex-col items-center mb-2'>
            
            Title: {product.title}
            Price: {product.price}
            <div style={{display:'flex'}}>
            <button onClick={() => setDetails(prev => !prev)}
            className={btnClasses.join(' ')}>{detais ? 'Hide' : 'Show'}</button>
        </div>
        {detais && <div><p>{product.description}</p></div>}<br/>
        
       
        </div>
    );
};

export default Product;