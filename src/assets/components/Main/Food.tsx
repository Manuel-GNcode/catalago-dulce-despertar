import { Product } from "./interfaces"

export const Food = ({id, name, urlImg, price}: Product)=>{
  return (
    <div id={name+id}>
      <figure>
        <img src={urlImg} alt={name} />
      </figure>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>compartir</button>
    </div>
  )
}