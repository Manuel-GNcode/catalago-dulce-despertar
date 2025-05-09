import { useState, useEffect } from "react"
import { catalogoData } from "../data/catalogoData"
import { Product } from "../components/Main/interfaces";

export const useCatalogo = ()=>{
  const [category, setCategory] = useState(1);
  const [list, setList] = useState(catalogoData.desayunos);
  const [query, setQuery] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value);
    setCategory(0);
  }

  useEffect(()=>{
    const userSearch = query.trim().toLowerCase();

    if (userSearch) {
      const filtered: Product[] = [];

      for (const category in catalogoData) {
        const matches = catalogoData[category as keyof typeof catalogoData].filter(item=>item.name.toLowerCase().includes(userSearch));

        if (matches.length > 0) {
          matches.forEach(match=>filtered.push(match))
        }
      }
      setList(filtered);
    } else {
      setList(catalogoData.desayunos);
      setCategory(1);
    }
  }, [query])

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