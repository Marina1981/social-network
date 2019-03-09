import React from 'react';
import style from './PhotosSection.module.css'

const PhotosSection = (props) => {
 return (
     <div className={style.photosSection}>
         <div className={style.photosLabel}>
             Photos
         </div>
     </div>
 )
};

export default PhotosSection;