import * as React from 'react';
import Header from '../header';

interface LayoutProps {
  title: string;
  location: any;
}

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <Header title={title} location={location} />

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
