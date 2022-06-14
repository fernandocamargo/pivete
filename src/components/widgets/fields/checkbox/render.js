/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ checked, children, onChange }) => (
  <label>
    <input checked={checked} onChange={onChange} type="checkbox" />
    <span> {children}</span>
  </label>
);
