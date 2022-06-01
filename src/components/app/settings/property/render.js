/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useModal } from "hooks";

import use from "./hooks";

export default ({ className, label, ...props }) => {
  const { Container: Modal, ...modal } = useModal();
  const { create } = use({ modal, ...props });

  return (
    <dl className={className}>
      <dt>{label}</dt>
      <dd>
        <nav>
          <h4>Actions:</h4>
          <ul>
            <li>
              <a href="/" title="Add new item" onClick={create}>
                Add new item
              </a>
            </li>
          </ul>
        </nav>
        <Modal>
          <p>This is the next modal</p>
        </Modal>
      </dd>
    </dl>
  );
};
