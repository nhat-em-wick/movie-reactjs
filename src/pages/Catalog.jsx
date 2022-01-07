import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import PageHeader from '../components/page-header/PageHeader'
import MovieGrid from '../components/movie-grid/MovieGrid'

import { category as cate } from '../api/tmdbApi'

const Catalog = props => {

  const { category } = useParams()
  
  return (
    <>
      <PageHeader>
        { category === cate.movie ? 'Movies' : 'TV' }
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={ category} />
        </div>
      </div>
    </>
  )
}

Catalog.propTypes = {

}

export default Catalog
