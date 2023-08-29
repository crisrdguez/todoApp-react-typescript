interface Props{
  filterSelected: 'all' | 'active' | 'completed';
  handleFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

export const Filters:React.FC<Props> = ({filterSelected, handleFilterChange}) => {
  const handleClick = (filter: 'all' | 'active' | 'completed') => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleFilterChange(filter);
  }

  return (

    <ul className="filters">
      <li>
        <a 
          className={`${filterSelected ==='all' ? 'selected' : ''}`}
          onClick={handleClick('all')}
          href="/?filter=all"
        >
          Todos
        </a>
      </li>

      <li>
        <a 
          className={`${filterSelected ==='active' ? 'selected' : ''}`}
          onClick={handleClick('active')}
          href="/?filter=active"
        >
          Activos
        </a>
      </li>

      <li>
        <a 
          className={`${filterSelected ==='completed' ? 'selected' : ''}`}
          onClick={handleClick('completed')}
          href="/?filter=completed"
        >
          Completados
        </a>
      </li>

    </ul>


  )



}