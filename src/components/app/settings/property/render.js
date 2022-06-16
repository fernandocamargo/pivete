import { useModal } from "hooks";

import use from "./hooks";
import Item from "./item";
import Value from "./value";

export default ({ className, ...props }) => {
  const { Container: Modal, ...modal } = useModal();
  const { content, create, details } = use({ modal, ...props });

  return (
    <dl className={className}>
      <dt>{content}</dt>
      <dd>
        {!!details.length && (
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
        <Item content="Office ID" />
        <Item content="CC Level 1" />
        <Item content="CC Level 3" />
        <Item content="Month" />
      </dd>
    </dl>
  );
};
