import React, { PropTypes } from 'react'
import { translate, Interpolate } from 'react-i18next'

const Header = ({t}) =>  {
  let interpolateComponent = <strong>a interpolated component</strong>
  return (
  		 <header style={{'marginBottom':'50px'}}><h1>{t('appName')}</h1>
  			<h5>{t('author')}：{t('authorName')}</h5>
  			<Interpolate i18nKey='interpolateSample' value='"some string"' component={interpolateComponent} />
  			<hr/>
  			<h7>{t('placeholderSample',{
  				replace:{name:'Wang Pin'}
  			})}</h7>
		</header>)
}

export default translate('common')(Header);