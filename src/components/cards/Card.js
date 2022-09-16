import './Card.scss'

const Card = ({target, yellow, about, proyects, contact}) => {
    return(
        <div className={target} style={ yellow? { width: '80%'}:{ width: '23%'} }>
        {
            about?  
            <div className='Card-About'>
               <span> <img src="https://img.icons8.com/stickers/70/000000/sakura.png" alt='flor-sakura'/> <strong>Valeria Mansueto </strong></span> 
               <p>Full Stack Developer</p>
                <p style={{fontSize: '16px' , fontWeight: 'lighter'}}>
                    Soy desarrolladora FullStack, <br/> 
                    actualmente busco crecer en<br/>
                    conocimiento y experiencia. <br/>
                    Me entusiasma formar parte de<br/> un equipo de trabajo, <br/>
                    siento que puedo aportar, <br/> desde lo técnico y como persona.<br/>
                    Tengo conocimientos en<br/> desarrollo web con JavaScript,<br/>
                     React.js, Node.js, Express, Axios, <br/>
                    Sequelize, PostgreSQL, MongoDB,<br/> HTML, CSS. 
                    Además trabajé <br/>en el desarrollo de una app movil<br/>
                     utilizando React Native<br/>
                     <br/>
                   <strong>¡Siéntete libre de contactarme <br/>si así lo deseas! </strong> 
                </p>
            </div> 
            : proyects? 
            <div className='Card-Proyects' style={{alignItems: 'flex-start'}}>
               <span><strong>Proyectos</strong></span> 

               <div>
                <img src="https://img.icons8.com/stickers/100/000000/pokemon.png" alt='poke-sticker'/>
                <p style={{flexDirection: 'column'}}>
                 <p style={{ fontSize: '16px'}}>SPA-Pokedex</p>
                 <p >¡Busca y crea pokemons!</p>  
                 <p>Deploy: Vercel y Heroku </p>   
                 <p><strong>React - Node - PostgreSQL</strong></p>
                </p>
                
                </div>

               <div>
                <img src="https://img.icons8.com/stickers/100/000000/astronaut.png" alt='astro-sticker'/>
                <p style={{flexDirection: 'column'}}>
                 <p style={{ fontSize: '16px'}}>E-commerce - AstroNet</p>
                 <p >Administra tu negocio desde tu app movil.</p>  
                 <p>Deploy: APK y Heroku </p>   
                 <p><strong>React Native - Node - MongoDB</strong></p>
                </p>
                </div>
               <div>
                <img src="https://img.icons8.com/stickers/100/000000/find-user-female.png" alt='search-sticker'/>
                <p style={{flexDirection: 'column'}}>
                 <p style={{ fontSize: '16px'}}>GitHub Search</p>
                 <p >Busca usuarios de GitHub y visualiza sus repositorios.</p>  
                 <p>Deploy: Vercel </p>   
                 <p><strong>React - Redux Toolkit</strong></p>
                </p>
                </div>
            </div> 
            : contact? 
            <div>contact</div> 
            : null
        }
        </div>
    )
}
export default Card;