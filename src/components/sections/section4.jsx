
const Section4 = () => {
  return (
    <div className="mt-20 rounded-tr-[250px] bg-[#000735] text-white h-auto items-center justify-center flex flex-col py-20">
        <h1 className="text-5xl mb-16">NUESTRO HORARIO</h1>
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
        <div className="flex justify-center flex-wrap gap-x-36 gap-y-10 dias-semana">
        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado','Domingo'].map((dia, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h2 className="text-3xl">{dia}</h2>
              </div>
              <div className="flip-card-back">
                <p className="text-3xl font-semibold ">7:00am <br />a <br/>7:00pm</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4