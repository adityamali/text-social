import React from 'react'

import styles from './post.module.css'

interface PostProps {
    avatar: string;
    username: string;
    time: string;
    content: string;
  }

function Post(props: PostProps) {
  return (
    <div className={styles.post}>
        <div className={styles.postHeader}>
            <div className={styles.avatar}><img src={props.avatar} alt="" /></div>
            <div className={styles.userInfo}>
                <h4 className={styles.username}>{props.username}</h4>
                <p className={styles.timeStamp}>{props.time}</p>
            </div>
        </div>
        <div className="content">
            <p>
                {props.content}
            </p>
        </div>
        <div className={styles.actions}>
            <div className="like">Like</div>
            <div className="comment">Comment</div>
            <div className="share">Share</div>
        </div>
    </div>
  )
}

export default Post