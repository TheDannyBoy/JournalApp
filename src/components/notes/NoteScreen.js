import React from 'react';
import { NotesAppbar } from './NotesAppbar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <NotesAppbar />
            <div className='notes__content'>
                <input
                    type="text"
                    placeholder='Some title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today...'
                    className='notes__textarea'
                />
                <div className='notes__image'>
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/I/81S%2BU-r6z7L._AC_SY606_.jpg"
                        alt="Diary"
                    />
                </div>
            </div>
        </div>
    )
}
