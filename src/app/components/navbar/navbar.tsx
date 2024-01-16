import React from 'react'
import Image from 'next/image'

import styles from './navbar.module.css'
import Link from 'next/link'

import home from '../../../../public/home.svg'
import bell from '../../../../public/bell.svg'
import events from '../../../../public/calendar.svg'
import project from '../../../../public/project.svg'
import communities from '../../../../public/communities.svg'
import bookmarks from '../../../../public/bookmark.svg'
import cog from '../../../../public/cog.svg'




function Navbar() {
  return (
    <div className={styles.navbar}>
        {/* Brand */}
        <div className={styles.brand}>
            <h1>Text</h1>
        </div>
        {/* Links */}
        <div className={styles.links}>
            <Link href="/"><button> <Image src={home} alt="" /> {Home}</button></Link>
            <Link href="/notifs"><button> <Image src={bell} alt="" /> {Notifications}</button></Link>
            <Link href="/events"><button> <Image src={events} alt='' /> {Events}</button></Link>
            <Link href="/projects"><button> <Image src={project} alt="" /> {Projects}</button></Link>
            <Link href="/communities"><button> <Image src={communities} alt="" /> {Communities}</button></Link>
            <Link href="/bookmarks"><button> <Image src={bookmarks} alt="" /> {Bookmarks}</button></Link>
            <Link href="/settings"><button> <Image src={cog} alt="" /> {Settings}</button></Link>
        </div>
        {/* Search */}
        <div className={styles.search}>
            <input type="text" placeholder="Search..."/>
        </div>
    </div>
  )
}

export default Navbar