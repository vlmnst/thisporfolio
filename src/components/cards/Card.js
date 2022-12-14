import "./Card.scss";

const Card = ({ target, yellow, about, proyects, contact }) => {
  return (
    <div
      className={target}
      style={yellow ? { width: "80%" } : { width: "23%" }}
    >
      {about ? (
        <div className="Card-About">
          <span>
            {" "}
            <img
              src="https://img.icons8.com/stickers/70/000000/sakura.png"
              alt="flor-sakura"
            />{" "}
            <strong>Valeria Mansueto </strong>
          </span>
          <p>Full Stack Developer</p>
          <p style={{ fontSize: "16px", fontWeight: "lighter" }}>
            Soy desarrolladora FullStack, <br />
            actualmente busco crecer en
            <br />
            conocimiento y experiencia. <br />
            Me entusiasma formar parte de
            <br /> un equipo de trabajo, <br />
            siento que puedo aportar, <br /> desde lo técnico y como persona.
            <br />
            Tengo conocimientos en
            <br /> desarrollo web con JavaScript,
            <br />
            React.js, Node.js, Express, Axios, <br />
            Sequelize, PostgreSQL, MongoDB,
            <br /> HTML, CSS. Además trabajé <br />
            en el desarrollo de una app movil
            <br />
            utilizando React Native
            <br />
            <br />
            <strong>
              ¡Siéntete libre de contactarme <br />
              si así lo deseas!{" "}
            </strong>
          </p>
        </div>
      ) : proyects ? (
        <div className="Card-Proyects" style={{ alignItems: "flex-start" }}>
          <span>
            <strong>Proyectos</strong>
          </span>

          <div>
            <a href="https://poke-app-zeta.vercel.app/">
              <img
                src="https://img.icons8.com/stickers/100/000000/pokemon.png"
                alt="poke-sticker"
              />
            </a>

            <p style={{ flexDirection: "column" }}>
              <p style={{ fontSize: "16px" }}>SPA-Pokedex</p>
              <p>¡Busca y crea pokemons!</p>
              <p>Deploy: Vercel y Heroku </p>
              <p>
                <strong>React - Node - PostgreSQL</strong>
              </p>
            </p>
          </div>

          <div>
            <a href="https://www.youtube.com/watch?v=o2CoBTuhhA4&ab_channel=CristianRubiles">
              <img
                src="https://img.icons8.com/stickers/100/000000/astronaut.png"
                alt="astro-sticker"
              />
            </a>
            <p style={{ flexDirection: "column" }}>
              <p style={{ fontSize: "16px" }}>E-commerce - AstroNet</p>
              <p>Administra tu negocio desde tu app movil.</p>
              <p>Deploy: APK y Heroku </p>
              <p>
                <strong>React Native - Node - MongoDB</strong>
              </p>
            </p>
          </div>
          <div>
            <a href="https://gh-search-rho.vercel.app/">
              <img
                src="https://img.icons8.com/stickers/100/000000/find-user-female.png"
                alt="search-sticker"
              />
            </a>

            <p style={{ flexDirection: "column" }}>
              <p style={{ fontSize: "16px" }}>GitHub Search</p>
              <p>Busca usuarios de GitHub y visualiza sus repositorios.</p>
              <p>Deploy: Vercel </p>
              <p>
                <strong>React - Redux Toolkit</strong>
              </p>
            </p>
          </div>
        </div>
      ) : contact ? (
        <div className="Card-contact">
          <span>
            <strong>Ponte en contacto, hagamos networking</strong>
          </span>
          <div>
            <img
              src="https://img.icons8.com/stickers/60/null/connectivity-and-help-skin-type-2.png"
              alt="manos"
            />
            <p>
              ¿Tienes un proyecto a concretar? Envíame un e-mail:
              <strong style={{ color: "rgb(17, 56, 7)"}}> vale-mansueto@hotmail.com </strong> 
            </p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/stickers/60/null/fingers-crossed-skin-type-1.png"
              alt="manos"
            />
            <p>
              ¿Una vacante que coincide con mi perfil? Escríbeme por <a href="https://www.linkedin.com/in/valeria-mansueto-dev/"> <strong>Linkedin </strong>  </a> 
            </p>
          </div>

          <div>
            <img
              src="https://img.icons8.com/stickers/60/null/volunteering.png"
              alt="manos"
            />
            <p>¿Quieres mirar un poco de código? ¡Aquí te dejo mi<a href="https://github.com/vlmnst/"> <strong>GitHub </strong>  </a>!</p>
          </div>
          <p>
            {" "}
            <strong>
              ¡Siéntete libre de contactarme si así lo deseas! Trabajemos en
              conjunto, demos oportunidades ♥
            </strong>{" "}
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default Card;
