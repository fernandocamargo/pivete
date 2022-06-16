export default ({ className, content }) => (
  <dl className={className}>
    <dt>{content}</dt>
    <dd>
      <nav>
        <h4>Actions:</h4>
        <ul>
          <li aria-roledescription="sort">
            <a href="/" title="Sort this item">
              Sort this item
            </a>
          </li>
          <li aria-roledescription="edit">
            <a href="/" title="Edit this item">
              Edit this item
            </a>
          </li>
        </ul>
      </nav>
    </dd>
  </dl>
);
