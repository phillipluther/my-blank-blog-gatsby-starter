/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            href
            label
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  const authorName = author?.name || 'Author Bio';
  const authorSummary = author?.summary;

  return (
    <aside className="bio">
      <h2 className="bio-name">About the Author, {authorName}</h2>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../../images/fpo.png"
        width={120}
        height={120}
        quality={95}
        alt={authorName}
      />
      {authorSummary && <p>{authorSummary || null}</p>}

      {social && (
        <ul className="social">
          {/* {social.map(({ href, label }) =>(
            <li className="social-item" key={href}>
              <a href={href} className="social-link">{label}</a>
            </li>
          ))} */}
        </ul>
      )}
    </aside>
  );
};

export default Bio;
