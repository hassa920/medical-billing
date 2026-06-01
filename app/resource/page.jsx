'use client'

import HeroSlider from '../components/sections/HeroSlider'
import ResourceHeader from '../components/sections/ResourceHeader'
import Blogs from '../components/ResourceSection/Blogs'
import CustomerStories from '../components/ResourceSection/CustomerStories'

const Resource = () => {
  return (
    <div>
      <HeroSlider />
      <ResourceHeader />
      <Blogs />
      <CustomerStories />
    </div>
  )
}

export default Resource
