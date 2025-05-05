import { CatalogoListProps } from "./interfaces";
import { Food } from "./Food";

export const CatalogoList = ({productList}: CatalogoListProps) => {
  return (
    <div>
      {productList.map((item)=>{
        return(<Food 
        key={item.name+item.id}
        id={item.id}
        name={item.name}
        urlImg={item.urlImg}
        price={item.price}
        ></Food>)
      })}
    </div>
  )
}