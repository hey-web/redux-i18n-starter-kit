import React from 'react'
import FilterLink from '../containers/FilterLink'
import { translate, Interpolate } from 'react-i18next'
import Header from './Header'

const Footer = ({t}) => {
    return (
      <p>
        {t('dashboard.footer.show')}:
        {" "}
        <FilterLink filter="SHOW_ALL">
          {t('dashboard.footer.all')}
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
          {t('dashboard.footer.active')}
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
          {t('dashboard.footer.completed')}
        </FilterLink>
      </p>
      )
}

export default translate('common')(Footer)