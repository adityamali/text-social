import Image from 'next/image'
import styles from './page.module.css'
import Post from '../components/postComp/Post'
import Composer from '../components/addPost/addPost'
import { time } from 'console'
import Communities from '../components/communitiesBlock/communities'


export default function Home() {
  let data = [
    {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Lorem ipsum dolor sit amet consectetur",
    time: "1 hour ago"},
    {
    name: "Jane Doe",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "Lorem ipsum dolor sit amet consectetur",
    time: "3 hour ago"},
    {
    name: "John Smith",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "Lorem ipsum dolor sit amet consectetur",
    time: "5 hour ago"},
    {
    name: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "Lorem ipsum dolor sit amet consectetur",
    time: "7 hour ago"},
    {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Lorem ipsum dolor sit amet consectetur",
    time: "9 hour ago"},
  ]


  return (
    <main className={styles.main}>
      <div className={styles.left}>
      <Composer />
      {data.map((post, index) => (
        <Post key={index} username={post.name} avatar={post.avatar} content={post.content} time={post.time} />
      ))}
      </div>
      <div className={styles.right}>
        <Communities/>
      </div>
    </main>
  )
}