/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ checked, className, children, onChange }) => (
  <label className={className}>
    <input checked={checked} onChange={onChange} type="checkbox" />
    <span> {children}</span>
  </label>
);
