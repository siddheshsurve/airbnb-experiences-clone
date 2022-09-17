import React from "react";
import NavMain from "./components/NavMain";
import Hero from "./components/Hero";
import Card from "./components/Card";
import KatieP from "./images/katie-zaferes.png"
import data from "./data.js"
export default function App() {
  // <Hero />
const cards = data.map(item => {
return (
  <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
  />
)
})        

return (
<div>
  <NavMain />
  {cards}
</div>
)
}