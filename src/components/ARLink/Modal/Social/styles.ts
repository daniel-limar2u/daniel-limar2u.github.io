import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .balloon {
    height: max-content;
    width: 90%;
    height: 50%;
    background-color: white;
    border-radius: 10px;

    position: relative;

    display: flex;
    flex-direction: column;
  }

  .info {
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      max-width: 100%;
      margin: 0;
    }

    h2 {
      margin: 5px 10px 5px 10px;
      font-family: proxima-nova;
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.22;
      letter-spacing: normal;
      text-align: center;
      color: #222222;
    }

    p {
      margin: 5px 3px 15px 3px;
      font-family: proxima-nova;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21;
      letter-spacing: normal;
      text-align: center;
      color: #222222;

      u {
        font-weight: bold;
      }
    }
  }

  button {
    padding: 20px;
    border: none;
    border-top: solid 0.1px rgba(0, 0, 0, 0.2);
    margin-top: auto;
    height: 20%;
    outline: none;
    background: none;

    font-family: proxima-nova;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: center;
    color: #3d71ba;
  }
`
