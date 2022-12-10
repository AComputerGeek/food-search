// @author: Amir Armion
// @version: V.01

function SearchBar({filter, setFilter}) 
{
  function handleType(e)
  {
    setFilter(e.currentTarget.value);
  }

  return (
    <label style={{fontWeight: "bold"}}>
      Search: <input style={{borderRadius: "10px", padding: "10px"}} type="text" value={filter} onChange={handleType} />
    </label>
  );
}

export default SearchBar;
