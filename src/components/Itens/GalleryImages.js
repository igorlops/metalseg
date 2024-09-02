import ButtonCTA from "./ButtonCTA";
import ImageGallery from "./ImageGallery"

export const GalleryImages = () => {
      
    let galeriaServicos = [
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg2.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg3.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg4.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg5.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg6.jpg"
        },
        {
        "image_cliente":"imgs/servicos/servicos_metal_seg7.jpg"
        },
    ];
    return (
        <div className="container">
            <div className="my-5">
                <h2 className={'titulo-section-light'}>Galeria de projetos</h2>
                <div className="divisor"></div>
            </div>
            <div className="d-flex justify-content-around flex-wrap align-items-center">
            {galeriaServicos.map((image_galery,index) => (
                <div
                    data-aos="fade-up" 
                    data-aos-delay={index*300} 
                    data-aos-duration="1000"
                    key={image_galery.image_cliente}
                    style={{
                        width: "250px",
                        height: "250px",
                        overflow: "hidden", 
                        margin:"15px 0",
                        position:"relative"
                    }}
                >
                    <ImageGallery img={image_galery.image_cliente} alt="Imagem projetos metalseg" />
                </div>
            ))}
            </div>
            <div className="d-flex justify-content-center my-5">
                <ButtonCTA href="https://www.instagram.com/portoes_metalsegfortaleza/">Ver mais</ButtonCTA>
            </div>
        </div>
    )
}