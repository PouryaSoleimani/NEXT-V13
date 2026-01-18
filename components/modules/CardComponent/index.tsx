import { PropsWithChildren } from "react";
import styles from "./card.module.css";

type Props = PropsWithChildren;

const CardComponent = ({ children }: Props) => {
  return <div className={styles.card}>{children}</div>;
};

export default CardComponent;
