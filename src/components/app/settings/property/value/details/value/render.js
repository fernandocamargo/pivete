/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export const Value = ({ content, value = [] }) => (
  <form>
    <fieldset>
      <legend>
        <label>
          <input type="checkbox" /> <span>{content}</span>
        </label>
      </legend>
      {!!value.length && (
        <details>
          <summary>See details</summary>
          <label>
            <input type="checkbox" /> <span>All</span>
          </label>
          {value.map(renderValue)}
        </details>
      )}
    </fieldset>
  </form>
);

export const renderValue = (value, index) => <Value key={index} {...value} />;

export default Value;
