import React from 'react';

function Preloader(props) {
// console.log(props.isActive)
  return (
    <section className={`preloader ${props.isActive ? '' : 'preloader_inactive'}`}>
      <i className="preloader__circle"></i>
      <p className="preloader__text">Идет поиск ...</p>
    </section>
  );
}

export default Preloader;
