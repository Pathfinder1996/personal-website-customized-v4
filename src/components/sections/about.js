import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  color: var(--lightest-slate); // set text color 
  text-align: justify; // set text alignment to justify

  p {
    text-align: justify;
    text-justify: inter-word;
  }

  ul.skills-list {
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
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
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
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

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const languages = ['C', 'C++', 'Python', 'RISC-V assembly', 'Verilog'];
  const skills = ['Linux Shell Operations', 'Lex & Yacc', 'Docker', 'MongoDB'];
  const libraries = ['TensorFlow', 'Keras', 'scikit-learn', 'scikit-image', 'OpenCV', 'NumPy', 'SciPy', 
                    'Matplotlib', 'Seaborn', 'PyQt5', 'Pandas'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">自我介紹</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              您好，我是戴聖宴，目前就讀於國立臺灣科技大學自動化及控制研究所博士班（ 2025/09 ~ Present ）。
              攻讀碩博士之前，我在半導體產業具有近五年的工作經驗。在多年從事高度重複且較受限的工作後，
              我於 2023 年意識到 AI 能大幅加速跨領域學習的效率，只要投入時間查證模型所提供的資訊，
              便能迅速突破知識門檻並持續成長。因此我嘗試轉職軟體工程師，
              同時回到校園進修，以學生身分系統性地補足軟體與韌體相關的基礎知識。
            </p>

            <p>
              在碩士階段（ 2023/09 ~ 2025/06 ）我的研究主題為
              <a href="https://github.com/Pathfinder1996/ntust-ib811-wrist-vein-verification-system/">手腕靜脈生物辨識</a>
              ，並完成從演算法到系統整合的完整開發流程，包括影像拍攝、感興趣區域（ROI）提取、
              靜脈特徵增強、特徵匹配模型、資料庫系統與多模態登入功能等模組。
              系統亦整合 LINE 通知與 SQLite 資料存取功能，最終完成計算量輕且已實際部署在邊緣裝置的簡易系統。
            </p>

            <p>
              碩士期間以
              <a href="/dsy_transcript.pdf" target="_blank" rel="noopener noreferrer">
                GPA 4.14 / 4.3 完成所有應修課程</a>
              同時跨系所於大學部與研究所選修多門電腦科學基礎課程，內容涵蓋 C 語言程式設計、
              <a href="https://github.com/Pathfinder1996/computer-architecture-homework/">計算機組織與架構</a>
              、
              <a href="https://github.com/Pathfinder1996/sic-xe-assembler/">系統程式</a>
              、作業系統、
              <a href="https://github.com/Pathfinder1996/data-structures-homework/">資料結構</a>
              、演算法、
              <a href="https://github.com/Pathfinder1996/micro-ex-compiler-design/">編譯器設計</a>
              與
              <a href="https://github.com/smitug01/ntu-icn-term-project-2025/">電腦網路通訊</a>
              等，透過課堂專題逐步培養出軟硬體整合與自主實作的能力。
            </p>

            <p>以下為就學期間使用過之語言：</p>
          </div>

          <ul className="skills-list">
            {languages && languages.map((language, i) => <li key={i}>{language}</li>)}
          </ul>

          <div>
            <p>
              其中 Python 與 C 為主要使用的語言，並學習以下技能：
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <div>
            <p>
              碩士論文主要以 Python 撰寫，常用之函式庫包括：
            </p>
          </div>

          <ul className="skills-list">
            {libraries && libraries.map((library, i) => <li key={i}>{library}</li>)}
          </ul>

        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/4A.MCoding.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>

      </div>
    </StyledAboutSection>
  );
};

export default About;
