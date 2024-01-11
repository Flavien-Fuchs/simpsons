import Fiche from './components/Fiche'
import './App.css'

const simpsons = [{
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
  backGround: `url(/images/bart.jpg)`
},
{
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png",
  firstName: "Homer",
  lastName: "Simpson",
  backGround: `url(/images/homer.jpg)`
}, {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
  firstName: "Marge",
  lastName: "Simpson",
  backGround: `url(/images/marge.jpg)`
}, {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
  firstName: "Lisa",
  lastName: "Simpson",
  backGround: `url(/images/lisa.jpg)`
}, {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
  firstName: "Maggie",
  lastName: "Simpson",
  backGround: `url(/images/maggie.jpg)`
}].sort(() => Math.random() - .5);


function App() {

  return (
    <div className='container'>
      <div>
        <img src='https://www.stickees.com/files/cartoon/the-simpsons/2257-the-simpsons-logo-sticker.png' alt='les simpsons' />
      </div>
      {simpsons.map((simpson, index) => {
        return (
          <Fiche key={index} index={index} firstName={simpson.firstName} lastName={simpson.lastName} image={simpson.image} backGround={simpson.backGround} />
        )
      })}
    </div>
  )
}

export default App
