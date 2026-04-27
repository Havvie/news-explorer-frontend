import './About.css';
import authorImage from '../../assets/author-image.jpg';

function About() {
    return (
        <section className='about'>
            <div className='about__content'>
                <img 
                    src={authorImage} 
                    alt='Author portrait' 
                    className='about__image' 
                />
                <div className='about__text'>
                    <h2 className='about__title'>
                        About the author
                    </h2>
                    <p className='about__paragraph'>
                        This project was developed by Havren Wright, an instructional technology specialist and aspiring software engineer with a strong background in K–5 education and technical support.

Havren holds a Master’s degree in Elementary Education and a Specialist degree in Instructional Technology, and is currently expanding his expertise in full-stack development through hands-on projects and advanced coursework in software engineering.

He has experience building modern web applications using technologies such as JavaScript, React, Node.js, Express, MongoDB, and RESTful APIs. His work focuses on creating user-friendly, responsive applications with clean architecture and real-world functionality.

                    </p>
                    <p className='about__paragraph'>
                        Through programs like TripleTen, Havren has developed practical skills in frontend and backend development, authentication, API integration, and deployment. He is particularly interested in building EdTech solutions, scalable web applications, and tools that enhance learning through technology.

He is currently seeking opportunities in junior software development, frontend engineering, or instructional technology roles where he can combine his passion for education with modern software development.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;