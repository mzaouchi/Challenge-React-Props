function Projects({tab}){
    return(
        
        <section id="projects">
            <h2 className="text-important">Projects</h2>

            <div className="projects-container">

                
                {
                    tab.map(el =>(
                        <div className="project-card">
                                <img src={el.src} alt="project" />
                                <h3>{el.title}</h3>
                                <p>{el.desc}</p>
                                <p><a href="#">{el.linkGit}</a></p>
                </div>
                    ))

                }
                            
       
            </div>
        </section>

    )
}

export default Projects;