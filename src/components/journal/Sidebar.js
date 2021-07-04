import React from 'react';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    return (
        <aside className='journal__sidebar'>
            <div className="journal__sidebar-journal">
                <h3 className='mt-5'>
                    <i className='fa fa-moon'></i>
                    <span> Danny</span>
                </h3>
                <button className='btn'>
                    Logout
                </button>
            </div>
            <div className="journal__new-entry mt-5">
                <i className='fa fa-calendar-plus fa-5x'></i>
                <p>New entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
