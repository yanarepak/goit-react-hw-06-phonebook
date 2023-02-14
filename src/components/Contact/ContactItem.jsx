import css from './ContactList.module.css';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({id, name, number}) =>{
  const dispatch = useDispatch()
    return (
        <li className={css.item}>
        <span>
          {name}: {number}
        </span>
        <button className={css.btn} type="button" onClick={() => dispatch(removeContact(id))}>
          Delete
        </button>
      </li> 
    )
}