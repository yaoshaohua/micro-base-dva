import React, { PropTypes } from 'react';
import styles from './Layout.scss';
import Header from './Header';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

export default Layout;
