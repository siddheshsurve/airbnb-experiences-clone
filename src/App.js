import React from "react";
import NavMain from "./components/NavMain";
import Hero from "./components/Hero";
import Card from "./components/Card";
import KatieP from "./images/katie-zaferes.png"
export default function App () {
  return (
    <>
      < NavMain/>
      {/* < Hero/> */}
      <Card 
          img = {KatieP}
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      />
    </>
  )
}