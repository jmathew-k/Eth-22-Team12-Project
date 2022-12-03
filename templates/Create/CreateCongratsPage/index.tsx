import styles from "./CreateCongratsPage.module.sass";
import Layout from "@/components/Layout";
import Congrats from "@/components/Congrats";

const CreatPage = () => {
    return (
        <Layout
            classHeader={styles.header}
            background="#F1F4F4"
            layoutNoOverflow
            footerHide
            emptyHeader
        >
            <Congrats
                title="Congrats"
                content={
                    <>
                        You’ve now deployed your Web3 Multi-sig Vault{" "}
                        <br></br>Visit Vault Homepage to assign Authorization
                    </>
                }
            />
        </Layout>
    );
};

export default CreatPage;
