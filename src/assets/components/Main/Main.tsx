import { Button } from "./Button"
import { useCatalogo } from "../../hooks/useCatalogo"
import { CatalogoList } from "./CatalogoList";

export const Main = ()=>{
  const {query, onChangeInput, category, list, onClickCategory} = useCatalogo();

  return (
    <section className="py-4 margin-responsive px-6">
      <h1 className="text-2xl font-bold text-dark-purple text-center mb-4">Catálogo de productos</h1>

      <div className="flex flex-col-reverse items-center gap-4 mb-4">
        <nav className="relative flex justify-between gap-2 w-full">
          <Button handleClick={()=>onClickCategory(1)} classActive={category==1?'active':''}>Desayunos</Button>
          <Button handleClick={()=>onClickCategory(2)} classActive={category==2?'active':''}>Sopas</Button>
          <Button handleClick={()=>onClickCategory(3)} classActive={category==3?'active':''}>Postres</Button>
          <span className="absolute w-full h-3 bg-soft-blue-green -z-1 -translate-y-1/2 top-1/2"></span>
        </nav>

        <label className="px-2 py-1 w-full max-w-[300px] flex bg-grayish-blue rounded-2xl items-center">
          <input 
          className="w-full outline-0" 
          type="search" 
          placeholder="Empanada" 
          name="search"
          value={query}
          onChange={onChangeInput}
          />
          <img className="w-auto h-4" src="images/icons/buscar.webp" alt="Icono de buscar" />
        </label>

      </div>

      <CatalogoList productList={list}></CatalogoList>
    </section>
  )
}