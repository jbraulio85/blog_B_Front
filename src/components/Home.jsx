import img from '../assets/img/homeImg.jpeg'

export const Home = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6">
        Bienvenido al Blog de Programación
      </h1>
      <img src={img} alt="Imagen de bienvenida" className="w-full h-64 md:h-72 lg:h-80 xl:h-96" />
      <p className="mx-auto leading-relaxed text-base mb-4 mt-8">
        ¡Hola! Te damos la bienvenida a nuestro blog de programación. Aquí
        podrás en práctica diversos temas de programación. 
      </p>
      <div className="mx-auto leading-relaxed text-base mb-4">
        Este blog es un ejercicio diseñado para reforzar tus conocimientos en desarrollo de software. Aquí, 
        podrán en práctica todos los conceptos aprendidos durante el presente ciclo escolar a través de:
        <ul className="list-disc list-inside ml-10">
          <li>Diagnóstico de errores backend.</li>
          <li>Diagnóstico de errores frontend.</li>
          <li>Refactorización de código.</li>
        </ul>
        Esto les permitirá aprender y crecer en su carrera de perito en computación. ¡Disfruta explorando y aprendiendo!
      </div>
    </div>
  );
};



