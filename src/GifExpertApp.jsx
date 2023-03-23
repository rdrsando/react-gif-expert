import { useState } from "react"
import { AddCategory,GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Abrazos'])

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return
        setCategories([newCategory,...categories])
    } 
  return (
    <>
        <h1>Search Gifs App</h1>

        <AddCategory 
            onNewCategory={ onAddCategory }
        />

        { categories.map(category =>(
               <GifGrid key={category} category={category}/>
           
            ))
        }
    </>
  )
}
