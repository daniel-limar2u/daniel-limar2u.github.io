import React from 'react'
import QRCode from 'qrcode.react'
import { RiCloseCircleFill } from 'react-icons/ri'

import { ContainerQRCode } from './styles'

interface Props {
  setOpen: (x: boolean) => void
  url: string
}

const QRCodeModal: React.FC<Props> = ({ setOpen, url }: Props) => {
  return (
    <ContainerQRCode data-cy="qrCodeModal">
      <RiCloseCircleFill
        data-cy="close"
        size={30}
        cursor="pointer"
        className="close-icon"
        onClick={() => {
          setOpen(false)
        }}
      />
      <div className="wrapper">
        <span>Escaneie o código QR abaixo e veja o produto na sua casa!</span>
        <QRCode
          value={url}
          style={{
            width: '67%',
            height: 'auto',
          }}
          renderAs="svg"
        />
      </div>
    </ContainerQRCode>
  )
}
export default QRCodeModal
