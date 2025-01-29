
const Section4 = () => {
  return (
    <div className="mt-20 sm:rounded-tr-[250px] rounded-tr-[80px] bg-[#000735] text-white h-auto items-center justify-center flex flex-col sm:py-20 py-10">
        <h1 className="sm:text-5xl text-2xl sm:mb-16 mb-10">NUESTRO HORARIO</h1>
        {/* dias de las semanas sin hover  */}
        {/* <div className="flex justify-center flex-wrap gap-x-36 gap-y-10 ">
            <div className=" border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Lunes</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Martes</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Miercoles</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Jueves</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Viernes</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Sabado</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
            <div className="border-2 border-white w-48 h-52 rounded-xl p-8 flex flex-col justify-evenly items-center hover:bg-white hover:text-[#000735] transition duration-700 ease-in-out">
                <h2 className="text-3xl">Domingo</h2>
                <p className="text-base">7:00am a 7:00pm</p>
            </div>
          
        </div> */}
        <div className="flex justify-center flex-wrap sm:gap-x-36 sm:gap-y-10 gap-x-8 gap-y-7 dias-semana">
        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado','Domingo'].map((dia, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="sm:text-3xl text-xl">{dia}</h2>
              </div>
              <div className="flip-card-back">
                <p className="sm:text-3xl text-xl font-medium ">7:00am <br />a <br/>7:00pm</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4