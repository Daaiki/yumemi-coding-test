import styles from '@/styles/components/Loadings/LoadingPage.module.scss'

export const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  )
}
