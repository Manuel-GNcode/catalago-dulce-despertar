import { CatalogoListProps } from "./interfaces";
import { Food } from "./Food";

export const CatalogoList = ({productList}: CatalogoListProps) => {
  return (
    productList.length > 0 ?
    <div className="grid grid-cols-2 justify-center gap-x-6 gap-y-8 md:grid-cols-3 p-6">
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
    : <div className="h-50 flex justify-center items-center "><p className="text-2xl font-bold">No hay productos disponibles</p></div>
  )
}