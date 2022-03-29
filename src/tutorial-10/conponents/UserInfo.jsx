import React from 'react'

export const UserInfo = ({ userData }) => {
  return (
    <div className="app-user">
    <div className="app-user_info">
      <div className="app-user_image">
        <img src={userData.avatar_url} alt="" />
      </div>
      <div className="app-user_data">
        <h1 className="app-user_name">
          {userData.name}
          <span>id: {userData.id}</span>
        </h1>
        <p className="app-user_about">
          {userData.bio}
        </p>
      </div>
    </div>
    <ul className="app-user_stats">
      <li className="app-user_stats-item">
        Подписчиков
        <span> {userData.followers}</span>
      </li>
      <li className="app-user_stats-item">
        Подписок
        <span> {userData.following}</span>
      </li>
      <li className="app-user_stats-item">
        Открытых репозиториев
        <span> {userData.public_repos}</span>
      </li>
    </ul>
    <ul className="app-user_location">
      <li className="app-user_location-item">{userData.location}</li>
      <li className="app-user_location-item">
        <a href="http://archakov.im">{userData.blog}</a>
      </li>
    </ul>
  </div>
  )
}
