import React, { ReactNode } from 'react';
import './style.css';

export interface IProps {
    children: ReactNode;
    /**
     * 背景色
     */
    backgroundColor: string;
    /**
     * 影の色
     */
    shadowColor: string;
}

const Card = ({children, backgroundColor, shadowColor = '#ccc'}: IProps) => {
    return (
        <div className="card" style={{
            boxShadow: `0 2px 5px ${shadowColor}`,
            backgroundColor,
        }}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card;