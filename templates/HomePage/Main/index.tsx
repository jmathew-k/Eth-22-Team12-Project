import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import Item from "./Item";

const list = [
    {
        title: "Fractionalized Public Vaults",
        collection: "Cool Cats",
        price: "10.00 ETH",
        reserve: "2.38 ETH",
        image: "/images/cool-cats.jpg",
    },
    {
        title: "Fractionalized Public Vaults",
        collection: "Escape I",
        price: "24.33 ETH",
        reserve: "5.64 ETH",
        image: "/images/cryptopunks.jpg",
        color: "#BCE6EC",
    },
    {
        title: "Fractionalized Public Vaults",
        collection: "Escape III",
        price: "5.4 ETH",
        reserve: "1.45 ETH",
        image: "/images/bayc.jpg",
        color: "#B9A9FB",
    },
];

import { Navigation, Scrollbar } from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type MainProps = {};

const Main = ({}: MainProps) => (
    <>
        <div className={styles.row}>
            <div className={styles.col}>
                <h1 className={cn("hero", styles.title)}>Multi-Sig Asset Vault</h1>
                <Arrow className={styles.arrow} />
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                    Twelv12 secures digital assets for Web3 gaming DAOs & digital creatives with Multi-signature on-chain vaults
                </div>
                <Link href="/discover">
                    <a className={cn("button-empty", styles.search)}>
                        secure your assets now
                    </a>
                </Link>
            </div>
        </div>
        <div className={styles.wrapper}>
            <Swiper
                navigation={true}
                loop={false}
                modules={[Navigation, Scrollbar]}
                className="vertical-swiper"
                direction="vertical"
                scrollbar={{
                    hide: true,
                }}
                speed={700}
                breakpoints={{
                    320: {
                        direction: "horizontal",
                    },
                    1024: {
                        direction: "vertical",
                    },
                }}
            >
                {list.map((x, index) => (
                    <SwiperSlide key={index}>
                        <Item item={x} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
);

export default Main;
