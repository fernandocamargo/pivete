import { useModal } from "hooks";

import use from "./hooks";
import Item from "./item";
import Value from "./value";

export const renderSelection = (selection, index) => (
  <Item key={index} {...selection} />
);

export default ({ className, ...props }) => {
  const { Container: Modal, ...modal } = useModal();
  const { content, create, deep, details, selection } = use({
    modal,
    ...props,
  });

  return (
    <dl className={className}>
      <dt>{content}</dt>
      <dd>
        {deep && (
          <nav>
            <h4>Actions:</h4>
            <ul>
              <li>
                <a href="/" title="Add new item" onClick={create}>
                  Add new item
                </a>
              </li>
            </ul>
            <Modal>
              <Value details={details} />
            </Modal>
          </nav>
        )}
        {selection.map(renderSelection)}
      </dd>
    </dl>
  );
};
