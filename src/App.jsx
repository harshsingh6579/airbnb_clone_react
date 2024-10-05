import './App.css'
import data from './data'
import Header from './components/Header'
import HeroImg from './components/HeroImg'
import Info from './components/Info'
import Card from './components/Card'

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
