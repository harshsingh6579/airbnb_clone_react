import './App.css'
import data from './data.js'
import Header from './components/Header.jsx'
import HeroImg from './components/HeroImg.jsx'
import Info from './components/Info.jsx'
import Card from './components/Card.jsx'

function App() {
  const dataArr = data.map(item => {
    return (
      <Card key={item.id} {...item} />
    )
  })
  return (
    <>
      <Header />
      <div className="hero">
        <HeroImg />
        <Info />
        <div className="cards-container">
          {dataArr}
        </div>
      </div>
    </>
  )
}

export default App
