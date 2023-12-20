"use client";

import { Button, Card, Flex } from "antd";

import styles from "./styles.module.css";

export default function Page() {
  return (
    <Flex className={styles.contactsContainer} vertical>
      <Flex justify="center" gap="middle">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.335791085295!2d76.93329438340709!3d43.3700023962435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38831303b0dec44d%3A0xc712b4e60356f4e6!2z0KLQntCeICLQoNGN0LnQtNC10LrRgSI!5e0!3m2!1sru!2sby!4v1703106400165!5m2!1sru!2sby"
          width="70%"
          height="450"
          style={{ border: "0 " }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Card className={styles.cardContainer} hoverable>
          <Flex vertical gap="large">
            <Flex vertical gap="middle">
              <h2>Свяжитесь с нами</h2>
              <p>
                Для получения консультации или ответа на вопрос - заполните
                форму ниже.
              </p>
              <p className={styles.grayText}>Телефон</p>
              <a className={styles.link} href="tel:+77075847073">
                +7 707 584 70 73
              </a>
              <a className={styles.link} href="tel:+77072008360">
                +7 707 200 83 60
              </a>
              <p className={styles.grayText}>E-mail</p>
              <a className={styles.link} href="mailto:sales@raydexkz.com">
                sales@raydexkz.com
              </a>
            </Flex>
            <Flex>
              <Button size="large">Написать сообщение</Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
