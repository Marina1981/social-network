import React from 'react';
import style from './MusicSection.module.css'


const MusicSection = (props) => {
    return (
        <div className={style.musicSection}>
            <div className={style.musicLabel}>
                Music
            </div>
        </div>
    )
};

export default MusicSection;