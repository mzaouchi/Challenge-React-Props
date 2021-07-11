function About({person}){
    return (
        <section id="about-me" >
             <h1>
                Hello, my name is
                <span className="rotate text-important">{person.fullName}</span>,<br />
                and i make horrible websites.
            </h1>

            <img className="avatar" src={person.src} alt="" />
        </section>
    )
}

export default About;