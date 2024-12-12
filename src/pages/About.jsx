import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Acerca de Este Proyecto</h1>
      <p>
        Este proyecto fue creado como parte de mis estudios en sistemas. 
        Mi objetivo principal es aplicar y mejorar mis conocimientos en desarrollo de software, 
        diseño de interfaces y manejo de datos.
      </p>
      <section>
        <h2>Objetivos del Proyecto</h2>
        <ul>
          <li>📚 Aprender y utilizar herramientas modernas como React y Node.js.</li>
          <li>🔍 Implementar buenas prácticas en diseño y desarrollo de sistemas.</li>
          <li>🚀 Desarrollar una solución práctica y funcional para problemas reales.</li>
        </ul>
      </section>
      <section>
        <h2>Sobre Mí</h2>
        <p>
          Soy estudiante de sistemas, apasionado por la tecnología y el desarrollo 
          de aplicaciones innovadoras. Mi meta es especializarme en crear soluciones que sean útiles 
          y eficientes.
        </p>
      </section>
    </div>
  );
};

export default About;
