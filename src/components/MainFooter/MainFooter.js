import React from 'react';
import style from "./MainFooter.module.css";



const MainFooter = () => {
   return (
       <div className={style.footerSection}>
          <div className={style.footerCopyright}>
              Copyright 2019
          </div>
       </div>
   )
};

export default MainFooter;