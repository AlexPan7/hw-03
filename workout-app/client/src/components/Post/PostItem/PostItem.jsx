import styles from './PostItem.module.scss';
import { Link } from 'react-router-dom';

const PostItem = ({post}) => {
  const {postItem, postImage, postDescr, badge, postTitle} = styles;

  const {id, images, price, title, description} = post;

  return (
    <li className={postItem}>
      <Link to={`/posts/${id}`}>
        <div className={postImage}>
          <img src={images[0]} alt="image description" />
        </div>
        <div className={postDescr}>
          <span className={badge}>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </span>
          <h3 className={postTitle}>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem