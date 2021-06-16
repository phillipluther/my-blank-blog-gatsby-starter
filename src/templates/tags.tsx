import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

const TagsTemplate: React.FC<PageProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <>
      <h1>{tag}</h1>
      <p>{`${totalCount} post${totalCount > 1 ? 's' : ''}`}</p>

      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields;
          const { title } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>

      <Link to="/tags">All tags</Link>
    </>
  );
};

export default TagsTemplate;

export const tagsQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
