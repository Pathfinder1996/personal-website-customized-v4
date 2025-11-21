import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { StaticImage } from 'gatsby-plugin-image';

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 40px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 50%;
      width: 300px;
      height: 300px;
      object-fit: cover;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: row;
  justify-content: flex-start;
  gap: 80px;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0;

  .hero-text {
    margin-right: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: var(--nav-height);
  }

  .hero-text {
    margin-right: 0;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>您好，我是</h1>;
  const two = <h2 className="big-heading">戴聖宴</h2>;
  const three = (
    <>
      <p>目前就讀於國立臺灣科技大學自動化及控制研究所博士班</p>
      <p>熱衷於學習新技術並將其應用於實際專案中</p>
    </>
  );

  const items = [one, two, three];

  return (
    <StyledHeroSection>

      <div className="hero-text">
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>
                    {item}
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </div>

      <StyledPic>
        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/me.jpg"
            width={300}
            height={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Headshot"
          />
        </div>
      </StyledPic>

    </StyledHeroSection>
  );
};

export default Hero;
