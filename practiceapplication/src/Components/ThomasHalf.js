import cavs1 from '../Assets/cavs1.jpg'
import heat from '../Assets/heat.jpg'
import cavs2 from '../Assets/cavs2.jpg'
import lakers from '../Assets/lakers.jpg'
import '../CSS/thomas.css'

const headshots = [
  { id: 1,
    source: cavs1
  },
  { id: 2,
    source: heat
  },
  { id: 3,
    source: cavs2
  },
  { id: 4,
    source: lakers
  }
]

const ThomasHalf = () => {
  return (
    <div className = "headshotContainer">
      {
        headshots.map(pic => (
          <img
            key={pic.id} 
            src={pic.source} 
            alt={`lebron team ${pic.id}`} 
          />
        ))
      }
    </div>
  )
}

export default ThomasHalf