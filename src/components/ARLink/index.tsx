import React, { useEffect } from 'react'
import is from 'is_js'

import ARLinkIOS from './ARLinkIOS'
import ARLinkAndroid from './ARLinkAndroid'
import ARLinkSocial from './ARLinkSocial'
import XRLinkAndroid from './XRLinkAndroid'

import { ARLinkProps } from './types'

const isSocial = (): boolean =>
  /instagram|FBAN|FBAV|LinkedInApp/i.test(navigator.userAgent)

const ARLink: React.FC<ARLinkProps> = (props: ARLinkProps) => {
  const { componentDidMount = () => undefined } = props
  const { xr } = navigator
  useEffect(() => {
    componentDidMount()
  }, [])

  if (is.android()) {
    if (xr) {
      return <XRLinkAndroid {...props} />
    }
    return <ARLinkAndroid {...props} />
  }
  if (isSocial()) {
    return <ARLinkSocial {...props} />
  }
  if (is.ios()) {
    return <ARLinkIOS {...props} />
  }

  return null
}

export default ARLink
