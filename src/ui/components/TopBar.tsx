import React from 'react'
import { appWindow } from '@tauri-apps/api/window'
import './TopBar.css'
import closeIcon from '../../resources/icons/close.svg'
import minIcon from '../../resources/icons/min.svg'
import cogBtn from '../../resources/icons/cog.svg'
import { app } from '@tauri-apps/api'

interface IProps {
  [key: string]: never
}

interface IState {
  version: string
}
export default class TopBar extends React.Component<IProps, IState> {
  constructor(props: Record<string, never>) {
    super(props)

    app.getVersion().then(version => {
      this.setState({ version })
    })
  }

  handleClose() {
    appWindow.close()
  }

  handleMinimize() {
    appWindow.minimize()
  }

  render() {
    return (
      <div className="TopBar" data-tauri-drag-region >
        <div id="title">
          <span data-tauri-drag-region>Cultivation</span>
          <span data-tauri-drag-region id="version">{this.state?.version}</span>
        </div>
        <div className="TopBtns">
          <div id="closeBtn" onClick={this.handleClose} className='TopButton'>
            <img src={closeIcon} alt="close" />
          </div>
          <div id="minBtn" onClick={this.handleMinimize} className='TopButton'>
            <img src={minIcon} alt="minimize" />
          </div>
          <div id="settingsBtn" className='TopButton'>
            <img src={cogBtn} alt="settings" />
          </div>
        </div>
      </div>
    )
  }
}