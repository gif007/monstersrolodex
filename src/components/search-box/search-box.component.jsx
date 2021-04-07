import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    // Return an input with dynamic placeholder text and onChange function
    <input
        className='search'
        onChange={handleChange}
        type='search'
        placeholder={placeholder}
    />
)