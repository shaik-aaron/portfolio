import setuImage from '../assets/setu.png'
import wireOneLabsImage from '../assets/wireonelabs.webp'
import intellispiders from '../assets/intellispiders.webp'
import phonepe from '../assets/phonepe.svg'

function Experience() {

    const assets = [setuImage, wireOneLabsImage, intellispiders, phonepe]

    return (
        <div className="grid w-full grid-cols-2 gap-4 mt-8">
          <div className="h-20 w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={assets[0]} height={100} width={100}/>
          </div>
          <div className="h-20 w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={assets[1]} height={200} width={200}/>
          </div>
          <div className="h-20 w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={assets[2]} height={200} width={200}/>
          </div>
          <div className="h-20 w-full border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <img src={assets[3]} height={120} width={120}/>
          </div>
        </div>
    );
  }
  
  export default Experience;
  