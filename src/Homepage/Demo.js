import "./Demo.css"
import ASScroll from '@ashthornton/asscroll';

export default function Demo(){
    return (
    <div className="page">
        <div className="page-wrapper">
            <section className="hero">
                <div className="hero-wrapper">
                    <div className="hero-main">
                        <h1 className="hero-main-title">Amlan Kalita</h1>
                        <p className="hero-main-description">Software Engineer | Developer</p>
                        
                    </div>
                    <div className="hero-second">
                        <p className="hero-second-subheading">Amlan Kalita</p>
                        <p className="hero-second-subheading">Portfolio</p>
                    </div>
                </div>
            </section>
            <div className="first-move section-margin"></div>
            <section className="first-section section left">
                <div className="section-intro-wrapper">
                    
                    <h1 className="section-title">
                    <span className="section-title-text">About Me</span>
                        <div className="section-title-decoration styleOne"></div>
                        <div className="section-title-decoration styleTwo"></div>
                        <div className="section-title-decoration styleThree"></div>
                    </h1>
                    <span className="section-number">01</span>
                </div>
                
                <div className="section-detail-wrapper">
                    <h3 className="section-heading">Lorem Ipsum</h3>
                    <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
                    <h3 className="section-heading">Lorem Ipsum</h3>
                    <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
                    <h3 className="section-heading">Lorem Ipsum</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
            </div>
            </section>
            
            <div className="section-margin"></div>

            <section className="second-section section right">
                <div className="section-intro-wrapper">
                    <h1 className="section-title">
                        <span className="section-title-text">My Works</span>
                        <div className="section-title-decoration styleOne"></div>
                        <div className="section-title-decoration styleTwo"></div>
                        <div className="section-title-decoration styleThree"></div>
                    </h1>
                    <span className="section-number">01</span>
                </div>
                <div className="section-detail-wrapper">
                    <h3 className="section-heading">Lorem Ipsum</h3>
                    <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
                    <h3 className="section-heading">Lorem Ipsum</h3>
                    <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
                    <h3 className="section-heading">Lorem Ipsum</h3>
                <p className="section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem molestias, et ipsum soluta voluptatum consequuntur commodi culpa quidem fuga modi nam! Sint magnam, eaque quis debitis pariatur enim quia.</p>
            </div>
            </section>
        </div>
    </div>
    )
}