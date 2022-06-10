/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { useModal } from "hooks";

import use from "./hooks";
import Value from "./value";

export default ({ className, content, details }) => {
  const { Container: Modal, ...modal } = useModal();
  const { create } = use({ modal });

  return (
    <dl className={className}>
      <dt>{content}</dt>
      <dd>
        {!!details.length && (
          <>
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
              <Value details={details} />
            </Modal>
          </>
        )}
      </dd>
    </dl>
  );
};
