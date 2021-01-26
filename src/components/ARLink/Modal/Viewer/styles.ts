import styled from 'styled-components'

export const Content = styled.div`
  .text {
    margin: auto;
    padding: 10px;
    font-family: var(--fallback-font, proxima-nova);
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #222222;
    b {
      font-weight: bold;
    }
  }

  .error {
    margin-top: 100px;
    font-size: 24px;
    font-weight: bold;
    line-height: 1.21;
    color: #d45b5b;
  }

  .top {
    width: 180px;
  }

  .bottom {
    width: 250px;
  }

  .fallback-viewer-container {
    width: 324px;
    height: 324px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    background-image: linear-gradient(to bottom, #e9eaeb, #e4e5e7);
  }

  .watermark {
    margin-top: 40px;
    margin-bottom: 20px;
    padding-bottom: 22px;
  }
`
