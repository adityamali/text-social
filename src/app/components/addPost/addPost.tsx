import React from 'react'
import PostEditor from './postEditor'

import styles from './composer.module.css'

function Composer() {
  return (
    <div className={styles.composer}>
      <div className={styles.content}>
      <div className={styles.avatar}><img src="https://i.pravatar.cc/150?img=7" alt="" /></div>
      <div className={styles.input} role='textbox' contentEditable >What's Happening</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.multi}>
          <div className={styles.icon}>Media <i className="fa fa-photo" aria-hidden="true"></i> </div>
          <div className={styles.icon}>Poll</div>
          <div className={styles.icon}>Event</div>
          <div className={styles.icon}>Project</div>
        </div>

          <button id={styles.post}>Post</button>
      </div>
    </div>
  )
}

export default Composer