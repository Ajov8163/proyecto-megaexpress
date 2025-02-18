
const Section4 = () => {
  return (
    <div className="section4 mt-20 sm:rounded-tr-[250px] rounded-tr-[80px] bg-[#000735] text-white h-auto items-center justify-center flex flex-col sm:py-20 pt-10">
        <h1 className="sm:text-5xl text-2xl sm:mb-16 mb-5">NUESTRO HORARIO</h1>
        <div className="flex justify-center flex-wrap sm:gap-x-36 sm:gap-y-10 gap-x-14 p-8 gap-y-7 dias-semana">
          <div  className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="sm:text-3xl text-xl">Lunes a sabado</h2>
              </div>
              <div className="flip-card-back">
                <p className="sm:text-3xl font-medium ">7:00am <br />a <br/>7:00pm</p>
              </div>
            </div>
          </div>
          <div  className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="sm:text-3xl text-xl">Domingos y Festivos</h2>
              </div>
              <div className="flip-card-back">
                <p className="sm:text-3xl font-medium ">7:00am <br />a <br/>4:00pm</p>
              </div>
            </div>
          </div>
      
      </div>
    </div>
  )
}

export default Section4