import styled from 'styled-components'

export const ContainerQRCode = styled.div`
  width: 150px;
  height: 195px;
  background-color: #f0f0f0;
  border-radius: 5px;
  z-index: 1;
  position: absolute;
  margin-top: -237px;
  .close-icon {
    margin-left: 134px;
    margin-top: -5px;
  }
  .wrapper {
    display: flex;
    margin-top: -16px;
    padding: 10px;
    background-color: #f0f0f0;
    flex-direction: column;
    border-radius: 5%;
    align-items: center;
    justify-content: space-between;

    span {
      width: 110px;
      height: 45px;
      margin: 0 0 10px;
      font-family: proxima-nova;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: center;
      color: #000000;
    }
  }
`

export const Button = styled.button`
  background-color: #fff;
  flex-direction: row;
  border: none;
  outline: none;
  margin-top: -31px;
  display: flex;
  position: absolute;

  img {
    display: flex;
    align-self: center;
  }

  span {
    margin: auto;
    font-family: proxima-nova;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-left: 5px;
  }
`
