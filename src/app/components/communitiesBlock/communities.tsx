import React from 'react'

import styles from './communities.module.css'

let communities = [
    {
      name: "Community of the gamers",
      avatar: "https://i.pravatar.cc/150?img=3",
      link: "https://www.google.com"},
    {
        name: "Hail Hitler",
        avatar: "https://i.pravatar.cc/150?img=8",
        link: "https://www.google.com"},
    {
        name: "Community 3",
        avatar: "https://i.pravatar.cc/150?img=11",
        link: "https://www.google.com"},
    {
        name: "Community 4",
        avatar: "https://i.pravatar.cc/150?img=15",
        link: "https://www.google.com"},
    {
        name: "Community 5",
        avatar: "https://i.pravatar.cc/150?img=3",
        link: "https://www.google.com"},
    {
        name: "Community 6",
        avatar: "https://i.pravatar.cc/150?img=8",
        link: "https://www.google.com"},
    {
        name: "Community 7",
        avatar: "https://i.pravatar.cc/150?img=11",
        link: "https://www.google.com"},
  ]


function Communities() {
  return (
    <div className={styles.main}>
        <h4>Communities</h4>
        {communities.map((community, index) => (
            <div className={styles.community} key={index}>
                <div className={styles.communityInfo}>
                    <img src={community.avatar} alt="" />
                    <p>{community.name}</p>
                </div>
                <button>Follow</button>
            </div>
        ))}
    </div>
  )
}

export default Communities