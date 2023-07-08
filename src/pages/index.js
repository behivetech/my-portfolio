import React, {useRef} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

// core
import Button from 'components/core/Button';
import Headline from 'components/core/Headline';

// layout
import Layout from 'components/layout/Layout';

// app
import About from 'components/app/about/';
import Projects from 'components/app/Projects';
import SEO from 'components/app/seo';

import './index.scss';

export default function IndexPage() {
    const aboutEl = useRef();
    const projectsEl = useRef();
    const {file} = useStaticQuery(graphql`
        query TopBackground {
            file(relativePath: {eq: "HomeMain.png"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `);

    function handleLearnClick() {
        aboutEl.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Layout className="index-page">
            <SEO title="Home" />
<<<<<<< Updated upstream:src/pages/index.js
            <div className="index-page__container">
                <Image
                    className="index-page__image"
                    fluid={file.childImageSharp.fluid}
                    alt="Event Image"
                />
                <div className="index-page__content">
                    <Headline className="index-page__heading" level={2}>
=======
            <div className={getChildClass('container')}>
                <div className={getChildClass('image-container')}>
                    <Image
                        width={2800}
                        height={1373}
                        layout="responsive"
                        alt="Event Image"
                        src="/images/HomeMain.png"
                        priority
                />
                </div>
                <div className={getChildClass('content')}>
                    <Headline className={getChildClass('heading')} level={2}>
>>>>>>> Stashed changes:src/pages/index.tsx
                        Welcome to BEhive Tech
                    </Headline>
                    <p>
                        Expert in the design, development and global introduction of advanced technologies to meet business, financial, competitive, and customer demands.  Experience combining strong development with outstanding performance for leading complex technology organizations.  Diverse understanding of web-based applications from concept, business case, and feasibility analysis through development, usability testing, deployment and maintenance using a modern web stack.
                        Direct work experience in...
                        - architecting several single page and server side apps from the ground up
                        - leading and mentoring junior to mid level developers
                        - working with extremely high traffic websites such as Southwest Airlines
                        - principal and senior level positions with smaller startups all the way up to large corporations
                    </p>
                    <p>
                        <Button raised onClick={handleLearnClick}>
                            Learn More
                        </Button>
                    </p>
                </div>
            </div>
            <About componentRef={aboutEl} />
            <Projects componentRef={projectsEl} />
        </Layout>
    );
}
