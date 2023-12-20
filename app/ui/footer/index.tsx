import { Footer } from "antd/es/layout/layout";
import {
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";
import styles from "./style.module.css";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <Footer className={styles.footer}>
      <Flex gap="middle" justify="space-between">
        <Link href="https://ru.linkedin.com/">
          <LinkedinOutlined style={{ fontSize: "2em" }} />
        </Link>
        <Flex gap="middle" vertical>
          <Link href="tel:+77072008360" aria-label="tel:+77072008360">
            <Flex gap="small" align="center">
              <PhoneOutlined style={{ fontSize: "1.5em" }} />
              +7 707 200 83 60
            </Flex>
          </Link>
          <Link
            href="mailto:info@raydexkz.com"
            aria-label="mailto:info@raydexkz.com"
          >
            <Flex gap="small" align="center">
              <MailOutlined style={{ fontSize: "1.5em" }} />
              info@raydexkz.com
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Footer>
  );
};
export default FooterComponent;
