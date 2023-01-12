import "../style.css";
import "../CardWidget"


export const NanBar = () => {
  return (
    <Header>

   <h1 classname='header_logo bsPrefix'>
          <Image

              source={{ uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Flogo-bebida&psig=AOvVaw0kkut6K_aZWQfvVxKPSn5C&ust=1671752923638000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNjg3orzi_wCFQAAAAAdAAAAABAE" }}
            /> </h1>
     <nav classname='header_nav container'>

       <a classname='header_link' href='#'> INICIO</a>
       <a classname='header_link' href='#'> Bebidas sin alcohol</a>
       <a classname='header_link' href='#'> Bebidas con alcohol </a>
       <a classname='header_link' href='#'> Congelados </a>
       <a classname='header_link' href='#'> Snacks </a>
              
        </nav>
        <div>
        < CardWidget />
        </div>
    </Header>
  )

};

export default NanBar;