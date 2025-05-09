import { Product } from "./interfaces"
import { useState } from "react"

export const Food = ({id, name, urlImg, price}: Product)=>{
  const [showModal, setShowModal] = useState(false);

  const handleShare = ()=>{
    const text = `Tenemos ${name} en la Repostería Dulce Despertar`;

    navigator.clipboard.writeText(text).then(()=>{
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }).catch(err=>{
      alert('Ocurrió un error');
      console.error(err);
    })
  }

  return (
    <div className="bg-dark-purple relative pb-4 text-center" id={name+id}>
      <figure className="bg-grayish-blue mb-2">
        <img width={720} height={960} src={urlImg} alt={name} />
      </figure>
      <h2 className="text-intense-rose capitalize font-bold">{name}</h2>
      <h3 className="absolute bg-soft-blue-green rounded-xl px-4 border-2 border-dark-purple bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 whitespace-nowrap font-bold text-dark-purple">{price}</h3>

      <button aria-label="share button" onClick={handleShare} className="absolute cursor-pointer top-0 right-0 translate-x-1/2 -translate-y-1/2">
        <div className="size-7 bg-center bg-cover bg-[url(/images/icons/compartir.webp)] hover:bg-[url(/images/icons/compartir_active.webp)] lg:size-10"></div>
      </button>

      {showModal && (
        <div className="font-bold absolute top-1/2 left-1/2 -translate-1/2 bg-soft-blue-green text-dark-purple px-4 py-2 rounded-xl">¡Texto copiado en el portapapeles</div>
      )}

    </div>
  )
}