import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/log/${blog.abno}`}>
            <h2>{ blog.title }</h2>
            <p>Observatioon of abnormality { blog.abno }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;
