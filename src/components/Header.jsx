import sneakers from "c:/Users/catherine joy riosa/Downloads/sneakers.png";

const Header = ({name}) => {
  return (
    <>
    <div className="p-10 bg-red-400 hover:bg-gray-500 rounded-xl flex justify-between items-center flex-row  flex ">
      <h1 className="sideStep font-bold text-center text-4xl text-shadow-lg font-serif uppercase ">{name}</h1>
    <img className="h-20 logo" src={sneakers} alt="" /> 
    </div>
    </>
  )
}

export default Header
