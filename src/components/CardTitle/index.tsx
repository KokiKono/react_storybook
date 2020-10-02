import React from 'react';
import './style.css';

export interface IProps {
    /**
     * タイトル
     */
    title: string;
}

export default function CardTitle({title}: IProps) {
    return (
        <h1 className="card-title">{title}</h1>
    )
}