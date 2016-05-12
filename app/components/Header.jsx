import React, { PropTypes } from 'react'
import { translate } from 'react-i18next'

const Header = ({t}) =>  {
  return (<header><h1>{t('appName')}</h1>
  			<footer>{t('author')}：{t('authorName')}</footer>
		</header>)
}

export default translate('common')(Header);