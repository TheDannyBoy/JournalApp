import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg)'
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Un nuevo día</p>
                <p className='journal__entry-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
