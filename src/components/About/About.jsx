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
                        This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
                    </p>
                    <p className='about__paragraph'>
                        You can also talk with your experience with TripleTen, what you learned there, and how you can help potential customers.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;