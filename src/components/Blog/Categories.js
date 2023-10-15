import React from 'react'
import Category from "./Category"
import { slug } from "github-slugger"

const Categories = ({categories, currentSlug}) => {
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid dark:border-light border-dark py-4 flex items-start justify-center flex-wrap font-medium mx-5 md:mx-10">
      {
        categories.map((cat) => <Category key={cat} link={`/categories/${cat}`} name={cat} active={currentSlug === slug(cat)} />)
      }
    </div>
  )
}

export default Categories