import Loading from "../assets/img/Loader.gif";

const Loader = () => {
  return (
    <div className='Loader'>
        <p>Loading</p>
        <img src={Loading} alt="loader" />
    </div>
  )
}

export default Loader