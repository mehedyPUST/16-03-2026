import React from 'react';
import OpenStatus from '../../assets/Open-Status.png';
import ClosedStatus from '../../assets/Closed-Status .png';

const Issue = ({ issue }) => {
    return (
        <div className="card-body">
            <div className='flex justify-between'>
                <span>
                    <img
                        src={issue.status === 'open' ? OpenStatus : ClosedStatus}
                        alt={`${issue.status} status`}
                        className="w-6 h-6" // আপনার প্রয়োজন অনুযায়ী ক্লাস
                    />
                </span>
            </div>
        </div>
    );
};

export default Issue;