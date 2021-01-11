import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Based in Eugene, Oregon. I' am an aspiring software engineer who's into all things tech and always striving to learn new things.</p>
            <p>I have experience with JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, Git, and more.</p>
            <p>I have worked in the restaurant industry for many years and I currently run a restaurant with my family. Besides food and coding I also love to play video games and watch tech videos on YouTube. My dream is to someday work for one of the big tech companies such as Google or Apple.</p>
            </Content>
        </div>
    );

}

export default AboutPage;