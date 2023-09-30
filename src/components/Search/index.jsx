import React from 'react'
import styles from './Search.module.scss'

const index = () => {
	return (
		<div className={styles.input}>
			<div className={styles.inputBlock}>
				<input placeholder="Поиск..." type="text" />
				<img src="../../images/search.svg" alt="" />
			</div>
		</div>
	)
}

export default index