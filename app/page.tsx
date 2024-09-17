import Categories from '@/components/Categories/Categories'
import categoriesData from '@/components/Categories/categoriesData'
import Courses from '@/components/courses/CourseArchiveHero'
import Home from '@/components/Home/Home'
import React from 'react'

const HomePage = () => {
  return (
    <>
     <Home/> 
     <Categories categories={categoriesData}/>
    </>
  )
}

export default HomePage
