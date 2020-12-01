import React from 'react';

function Preloader(props) {
  return (
    <section className={`preloader ${props.isActive ? '' : 'preloader_inactive'}`}>
      <i className="preloader__circle"></i>
      <p className="preloader__text">Searching ...</p>
    </section>
  );
}

export default Preloader;
