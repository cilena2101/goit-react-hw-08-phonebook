import { useContacts } from './Hooks/hooks';
import css from './styles.module.css';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={css.filter_container}>
      <h2 className={css.f_title}>Filter by contact name</h2>
      <input
        type="text"
        name="filter"
        className={css.form_control}
        value={filter}
        placeholder="Filter by contact name"
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};