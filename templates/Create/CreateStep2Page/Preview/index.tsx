import cn from "classnames";
import styles from "./Preview.module.sass";
import Image from "@/components/Image";

type PreviewProps = {};

const Preview = ({}: PreviewProps) => (
    <>
        <div className={styles.title}>Preview</div>
        <div className={styles.preview}>
            {/* <Image
                src="/images/create-preview.jpg"
                layout="fill"
                objectFit="cover"
                alt="Prreview"
            /> */}
            <div className={styles.image}>
                <Image
                    src="/images/vault.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Preview"
                />
            </div>
            <div className={styles.category}>Ready</div>
        </div>
        <div className={styles.head}>
            <div className={cn("h4", styles.subtitle)}>Ethereum Multi-Sig Vault</div>
            <div className={styles.price}>0.00034 ETH</div>
        </div>
    </>
);

export default Preview;
