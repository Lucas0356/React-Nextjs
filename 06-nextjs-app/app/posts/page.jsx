import ListOfPosts from './ListOfPosts'
import styles from './page.module.css'

export default function postsPage () {
  return (
    <main>
      <section className={styles['posts-container']}>
        <ListOfPosts />
      </section>
    </main>
  )
}

