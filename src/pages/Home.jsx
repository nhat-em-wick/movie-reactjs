import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import HeroSlide from '../components/hero-slide/HeroSlide'
import { OutlineButton } from '../components/button/Button'
import MovieList from '../components/movie-list/MovieList'

import { category, movieType, tvType } from '../api/tmdbApi'
const Home = props => {
  return (
    <div>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Trending Movies</h2>
              <Link to='/movie'>
                  <OutlineButton className="sm">View more</OutlineButton>
              </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Top Rated Movies</h2>
              <Link to='/movie'>
                  <OutlineButton className="sm">View more</OutlineButton>
              </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Trending TV</h2>
              <Link to='/tv'>
                  <OutlineButton className="sm">View more</OutlineButton>
              </Link>
          </div>
          <MovieList category={category.movie} type={tvType.popular}/>
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Top Rated TV</h2>
              <Link to='/tv'>
                  <OutlineButton className="sm">View more</OutlineButton>
              </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {

}

export default Home
