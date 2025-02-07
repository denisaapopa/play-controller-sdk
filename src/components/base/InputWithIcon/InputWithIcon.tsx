import cx from "classnames";
import { ComponentProps, PropsWithChildren } from "react";

import Input from "../Input/Input";
import styles from "./InputWithIcon.module.scss";

export type Props = PropsWithChildren<ComponentProps<"input">> & {
  classNames?: {
    input?: string;
    icon?: string;
  };
  onClear?: () => void;
  withClear?: boolean;
  backgroundColorHex: string;
  textColorHex: string;
};

const InputWithIcon = ({
  children,
  className,
  classNames,
  onClear,
  backgroundColorHex,
  textColorHex,
  ...restProps
}: Props) => {
  return (
    <div className={cx(styles.base, className)}>
      <Input
        {...restProps}
        className={cx(styles.input, styles.input, classNames?.input)}
        textColorHex={textColorHex}
        backgroundColorHex={backgroundColorHex}
      />
      {onClear && (
        <button className={styles.clear} onClick={onClear}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.66669 9.99984C1.66669 5.39746 5.39765 1.6665 10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332C5.39765 18.3332 1.66669 14.6022 1.66669 9.99984ZM8.08928 6.91058C7.76384 6.58514 7.2362 6.58514 6.91076 6.91058C6.58533 7.23602 6.58533 7.76366 6.91076 8.08909L8.82151 9.99984L6.91076 11.9106C6.58533 12.236 6.58533 12.7637 6.91076 13.0891C7.2362 13.4145 7.76384 13.4145 8.08928 13.0891L10 11.1783L11.9108 13.0891C12.2362 13.4145 12.7638 13.4145 13.0893 13.0891C13.4147 12.7637 13.4147 12.236 13.0893 11.9106L11.1785 9.99984L13.0893 8.08909C13.4147 7.76366 13.4147 7.23602 13.0893 6.91058C12.7638 6.58514 12.2362 6.58514 11.9108 6.91058L10 8.82133L8.08928 6.91058Z"
              fill={textColorHex}
            />
          </svg>
        </button>
      )}
      {children && (
        <div className={cx(styles.icon, classNames?.icon)}>{children}</div>
      )}
    </div>
  );
};

export default InputWithIcon;
