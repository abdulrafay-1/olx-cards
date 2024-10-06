import { useState } from "react";
import Card from "./components/Card";
import "./App.css"

function App() {
  return (
    <>
      <h1>Olx Cards</h1>
      <main>
        <Card title='lorem ipsum dolor' price='2000' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s'/>
        <Card title='Maecenas quis fringilla orci' price='500' src='https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'/>
        <Card title='Duis ipsum leo' price='3750' src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg'/>
        <Card title='Aenean ut ipsum aliquet' price='660' src='https://assets.turbologo.com/blog/en/2021/09/10094210/product-photo-1.png' />
        <Card title='Nulla eget nulla fringilla' price='9000' src='https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png'/>
      </main>
    </>
  );
}

export default App;
