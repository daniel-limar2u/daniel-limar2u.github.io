import React, { useState } from 'react'

import { Button } from './styles'
import arIcon from '../../assets/images/ar.svg'
import QRCodeModal from './Modal'

interface Props {
  url: string
}

const QRCode: React.FC<Props> = ({ url }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div data-cy="componentModal">
      {open && <QRCodeModal data-cy="modal" setOpen={setOpen} url={url} />}
      <Button
        data-cy="button"
        className="control-button"
        type="button"
        onClick={() => {
          setOpen(true)
        }}
      >
        <img src={arIcon} alt="" width={18} height={18} />
        <hr />
        <span>Veja no seu espaço</span>
      </Button>
    </div>
  )
}
export default QRCode
