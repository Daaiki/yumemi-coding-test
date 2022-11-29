import styles from '@/styles/components/Headers/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>都道府県別総人口推移</h1>
    </header>
  )
}
