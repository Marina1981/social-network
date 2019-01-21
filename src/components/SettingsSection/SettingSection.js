import React  from 'react';
import style from './SettingSection.module.css';
import {NavLink} from "react-router-dom";



const SettingsSection = (props) => {
  return (
      <div className={style.wraperUserSettingsSection}>
          <div className={style.userSettingsSection}>
              <div className={style.userNameBlock}>
                  <div className={style.userDataLabel}>
                      Имя и фамилия :
                  </div>
                  <div className={style.userName}>
                      {props.userName}
                  </div>
              </div>
                  <NavLink to='/' className={style.settingsButtonUserName}>
                      Изменить
                  </NavLink>
              <div className={style.userBirthDateBlock}>
                  <div className={style.userDataLabel}>
                      Дата рождения :
                  </div>
                  <div className={style.userBirthDate}>
                      {props.userBirthDate}
                  </div>
              </div>
                  <NavLink to='/' className={style.settingsButtonUserBirthDate}>
                      Изменить
                  </NavLink>
              <div className={style.userCityBlock}>
                  <div className={style.userDataLabel}>
                      Город :
                  </div>
                  <div className={style.userCity}>
                      {props.userCity}
                  </div>
              </div>
              <NavLink to='/' className={style.settingsButtonUserCity}>
                  Изменить
              </NavLink>
              <div className={style.userEducationBlock}>
                  <div className={style.userDataLabel}>
                      Образование :
                  </div>
                  <div className={style.userEducation}>
                      {props.userEducation}
                  </div>
              </div>
              <NavLink to='/' className={style.settingsButtonUserEducation}>
                  Изменить
              </NavLink>
              <div className={style.userWebSiteBlock}>
                  <div className={style.userDataLabel}>
                      Сайт :
                  </div>
                  <div className={style.userWebSite}>
                      {props.userWebSite}
                  </div>
              </div>
              <NavLink to='/' className={style.settingsButtonUserWebSite}>
                  Изменить
              </NavLink>
              <div className={style.languageBlock}>
                  <div className={style.userDataLabel}>
                      Язык :
                  </div>
                  <div className={style.language}>
                      {props.language}
                  </div>
              </div>
              <NavLink to='/' className={style.settingsButtonLanguage}>
                  Изменить
              </NavLink>
          </div>
      </div>
  )
};

export  default SettingsSection;