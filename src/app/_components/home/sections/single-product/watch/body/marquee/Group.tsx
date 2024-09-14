import Item from "./Item";
import styles from "./styles.module.css";

interface Props {
    speed?: string;
    data: string[];
}

export default async function Group({ speed, data }: Props) {
    return (
        <div
            className={styles.marquee_group}
            style={{ animationDuration: speed }}
        >
            {data.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
}
