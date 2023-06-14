import React from 'react'
import styles from './NavBar.module.scss'
import SortItem from '../SortItem'
import axios from 'axios'
import { debounce } from 'lodash'
import { useDispatch } from 'react-redux'
import { sort } from '../../redux/slices/navBarSlice'

const index = () => {
	/* eslint-disable */
	const [data, setData] = React.useState()
	const [inputMinValue, setInputMinValue] = React.useState('')
	const [inputMaxValue, setInputMaxValue] = React.useState('')

	const dispatch = useDispatch()

	const inputMinRef = React.useRef()
	const inputMaxRef = React.useRef()

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('http://localhost:5000/navBarItems')
				setData(res.data)
			} catch (error) {
				console.error(error)
				alert('Ошибка при запросе данных ;(')
			}
		}
		fetchData()
	}, [])

	const updateMinInputValue = React.useCallback(
		debounce(str => {
			dispatch(
				sort({
					category: 'minPriceValue',
					value: str,
				})
			)
		}, 1000),
		[]
	)

	const updateMaxInputValue = React.useCallback(
		debounce(str => {
			dispatch(
				sort({
					category: 'maxPriceValue',
					value: str,
				})
			)
		}, 1000),
		[]
	)

	const changeInputMinPrice = event => {
		if (Number(event.target.value)) {
			setInputMinValue(event.target.value)
			updateMinInputValue(event.target.value)
		} else {
			if (event.target.value.length === 0) {
				setInputMinValue('')
				updateMinInputValue(undefined)
			}
		}
	}

	const changeInputMaxPrice = event => {
		if (Number(event.target.value)) {
			setInputMaxValue(event.target.value)
			updateMaxInputValue(event.target.value)
		} else {
			if (event.target.value.length === 0) {
				setInputMaxValue('')
				updateMaxInputValue(undefined)
			}
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<div className={styles.inputWrapper}>
					<h3 className={styles.inputTitle}>Ценна</h3>
					<div className={styles.inputBlock}>
						<input
							ref={inputMinRef}
							value={inputMinValue}
							onChange={changeInputMinPrice}
							className={styles.input}
							placeholder='от 70000'
							type='text'
						/>
						<input
							ref={inputMaxRef}
							value={inputMaxValue}
							onChange={changeInputMaxPrice}
							className={styles.input}
							placeholder='до 180000'
							type='text'
						/>
					</div>
				</div>

				<div className='accordion' id='accordionPanelsStayOpenExample'>
					{data &&
						data.map(obj => {
							return (
								<SortItem
									key={obj.id}
									id={obj.id}
									name={obj.title}
									items={obj.items}
								/>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default index
