import Image from "next/image";
// import { useTranslations } from "next-intl";
// import styles from "./page.module.css";

import styles from "../page.module.css";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { Button, Input } from "antd";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  console.log("🚀 ~ Home ~ t:", t)
  return (
      <main className={styles.main}>
        <Link href="/login">Login</Link>
        <h1>{t("title")}</h1>
        <p>This is dynamic Translate Language Project</p>
      </main>
  );
}
