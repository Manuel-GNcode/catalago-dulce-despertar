import { useState } from "react"
import { catalogoData } from "../data/catalogoData"

export const useCatalogo = ()=>{
  const [category, setCategory] = useState(1);
  const [list, setList] = useState(catalogoData.desayunos);
  const [query, setQuery] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value);
  }

  const onClickCategory = (newCategory: number)=>{
    setCategory(newCategory);

    if (newCategory === 1) setList(catalogoData.desayunos);
    else if (newCategory === 2) setList(catalogoData.sopas);
    else setList(catalogoData.postres)
  }

  return {
    category,
    list,
    onClickCategory,
    query,
    onChangeInput
  }

}