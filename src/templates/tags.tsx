import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostSummary from '../components/post-summary';

const TagsTemplate: React.FC<PageProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes: posts, totalCount } = data.allMarkdownRemark;
  const title = `Blog Posts About ${tag}`;

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <Seo
        title={title}
        description={`Blog posts from the Principled Engineer covering ${tag.toLowerCase()}.`}
      />
      <h1>{title}</h1>
      <p>{`${totalCount} post${totalCount > 1 ? 's' : ''}`}</p>

      <ul>
        {posts.map((post) => {
          const { slug } = post.fields;
          const { excerpt } = post;
          const { description, ...summaryProps } = post.frontmatter;

          return (
            <li key={slug}>
              <PostSummary
                slug={slug}
                description={description || excerpt }
                {...summaryProps}
              />
            </li>
          );
        })}
      </ul>

      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default TagsTemplate;

export const tagsQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        ...PostSummaryProps
      }
    }
  }
`;
