// @author: Amir Armion
// @version: V.01

import { v4 as uuidv4 } from "uuid";

function List({food}) 
{
  return (
    <table>
      <tr key={food.id}>
        <td key={uuidv4()} style={{fontWeight: "bold", paddingRight: "20px"}} dangerouslySetInnerHTML={{ __html: food.name }}></td>
        <td key={uuidv4()} dangerouslySetInnerHTML={{ __html: food.description }}></td>
      </tr>
    </table>
  );
}

export default List;
