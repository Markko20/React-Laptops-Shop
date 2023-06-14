import React from 'react';
import styles from './CheckBox.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { sort } from '../../redux/slices/navBarSlice';

const index = ({ title }) => {
  /* eslint-disable */
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const inputRef = React.useRef();
  const { sortItems } = useSelector(state => state.navBarSlice)
  
  const onClick = (title) => {
    const category = (inputRef.current.closest('.accordion-item').childNodes[0].childNodes[0].innerHTML);
    setChecked(!checked);
    dispatch(
      sort({
        checked,
        title,
        category
      }),
    );
  };

  return (
    <div className={styles.sortItem}>
      <input
        ref={inputRef}
        onClick={() => onClick(title)}
        type="checkbox"
        className={styles.customCheckbox}
        id={title}
        name={title}
        value="yes"
        defaultChecked={checked}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default index;
