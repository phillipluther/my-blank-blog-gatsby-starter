import * as React from 'react';
import { Link } from 'gatsby';
import dashify from 'dashify';
import VisuallyHidden from '@reach/visually-hidden';

interface PostSummaryProps {
  title: string;
  description: string;
  date: string;
  coverImage: any; // fix me
  slug: string;
  tags: string[];
}

const PostSummary: React.FC<PostSummaryProps> = ({
  title,
  description,
  date,
  coverImage,
  slug,
  tags,
}) => {

  return (
    <article className="post-summary">
      <header>
        <h3>{title}</h3>
        <p>{date}</p>
        {/* coverImage */}
      </header>

      <div>{description}</div>

      <footer>
        <Link to={slug}>
          Read More
          <VisuallyHidden> of {title}</VisuallyHidden>
        </Link>

        <h4>More Like This</h4>
        <ul className="tags">
          {tags.map((tag) => {
            const dashedTag = dashify(tag);

            return (
              <li className="tag" key="dashedTag">
                <Link to={`/tags/${dashedTag}`}>{tag}</Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </article>
  )
};

export default PostSummary;
