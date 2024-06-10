import {
  angular,
  asp,
  cSharp,
  flutter,
  ionic,
  java,
  javaScript,
  mongo,
  mysql,
  node,
  python,
  react,
  reactNative,
  spring,
  typscript,
  vue,
  docker,
  git,
} from "../assets/img";

export const About = () => {
  return (
    <div className="mb-20">
      <h1 className="sm:text-4xl text-2xl font-bold my-6">
        Acerca de Nosotros
      </h1>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Somos un equipo de profesores dedicados de la especialidad de
        Informática. Nuestro objetivo es proporcionar una herramienta que aporte a la educación calidad y
        te permita estar preparado para el mundo del desarrollo de software.
      </p>
      <p className="mx-auto leading-relaxed text-base mb-4">
        Este es solo el inicio de tu carrera profesional y estamos seguros que podrás resolver este ejercicio. ¡Éxitos!
      </p>
      

      <div className="flex flex-wrap justify-around items-center mt-10">
        <img
          src={angular}
          alt="Angular Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={asp}
          alt="Asp .NET Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={cSharp}
          alt="cSharp Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={flutter}
          alt="Fluetter Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={ionic}
          alt="Ionic Logo"
          className="w-32 h-32 object-contain p-4"
        />
      </div>
      <div className="flex flex-wrap justify-around items-center">
        <img
          src={javaScript}
          alt="javaScript Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={mongo}
          alt="Mongo Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={mysql}
          alt="Mysql Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={node}
          alt="NodeJs Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={python}
          alt="Python Logo"
          className="w-32 h-32 object-contain p-4"
        />
      </div>
      <div className="flex flex-wrap justify-around items-center">
        <img
          src={reactNative}
          alt="React Native Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={spring}
          alt="SrpingBoot Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={typscript}
          alt="Typescript Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={vue}
          alt="VueJs Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={docker}
          alt="Docker Logo"
          className="w-32 h-32 object-contain p-4"
        />
      </div>
      <div className="flex flex-wrap justify-around items-center">
      <img
          src={java}
          alt="Java Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={react}
          alt="React Logo"
          className="w-32 h-32 object-contain p-4"
        />
        <img
          src={git}
          alt="Git Logo"
          className="w-32 h-32 object-contain p-4"
        />
      </div>
    </div>
  );
};
