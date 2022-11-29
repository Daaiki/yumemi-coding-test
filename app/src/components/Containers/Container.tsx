import React from 'react'
import styles from '@/styles/components/Containers/Container.module.scss'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>
}
