import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    { name: "commercial", description: "photos of grocery stores, food trucks, and other commercial projects" },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    { name: "landscape", decription: "Fields, farmhouses, waterfalls, and the beauty of nature" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <ContactForm />
        <Gallery currentCategory={currentCategory}/>
        <About />
      </main>
    </div>
  );
}

export default App;
