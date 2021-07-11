import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/authActions';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <aside className='journal__sidebar'>
            <div className="journal__sidebar-journal">
                <h3 className='mt-5'>
                    <i className='fa fa-moon'></i>
                    <span> Danny</span>
                </h3>
                <button className='btn' onClick={handleLogout}>
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
