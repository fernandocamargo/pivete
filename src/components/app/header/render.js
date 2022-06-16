export default ({ className }) => (
  <header className={className}>
    <h2>
      <a href="/" title="Pectus Finance">
        Pectus Finance
      </a>
      <span> proudly presents:</span>
    </h2>
    <nav>
      <h4>Browse through:</h4>
      <ul>
        <li aria-roledescription="upload">
          <a href="/" title="Data Upload">
            Data Upload
          </a>
        </li>
        <li aria-roledescription="controlling">
          <a href="/" title="Controlling">
            Controlling
          </a>
        </li>
        <li aria-current="page" aria-roledescription="builder">
          <a href="/" title="Report Builder">
            Report Builder
          </a>
        </li>
        <li aria-roledescription="workspaces">
          <a href="/" title="Workspaces">
            Workspaces
          </a>
        </li>
        <li aria-roledescription="mappings">
          <a href="/" title="Data Mapping">
            Data Mapping
          </a>
        </li>
        <li aria-roledescription="kpi">
          <a href="/" title="KPI Builder">
            KPI Builder
          </a>
        </li>
        <li aria-roledescription="reports">
          <a href="/" title="Reports">
            Reports
          </a>
        </li>
        <li aria-roledescription="settings">
          <a href="/" title="Setttings">
            Setttings
          </a>
          <ul>
            <li aria-roledescription="notifications">
              <a href="/" title="See notifications">
                <abbr title="110">See notifications</abbr>
              </a>
            </li>
            <li aria-roledescription="profile">
              <a href="/" title="Profile">
                <abbr title="M">Profile</abbr>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <form>
      <fieldset>
        <legend>Search</legend>
        <div>
          <label htmlFor="keywords">Keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            placeholder="Search for keywords, workspaces etc. "
          />
        </div>
      </fieldset>
    </form>
  </header>
);
