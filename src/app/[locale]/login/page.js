"use client";
import { Button, Select } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LoginComp = dynamic(() => import("./LoginComp"), {
  loading: () => <h1>Loading.......</h1>,
});

const { Option } = Select;

export default function Login() {
  const queryParams = { type: "user" };
  const router = useRouter();

  const t = useTranslations("HomePage");

  const changeLanguage = (value) => {
    console.log("🚀 ~ changeLanguage ~ value:", value);
    router.replace(`/${value}/login`);
    // router.push(router.pathname, router.asPath, { locale: value });
  };
  const searchParams = useSearchParams();
  const [st, setSt] = useState(0);

  console.log("🚀 ~ Login ~ Router:", router);

  const updateSorting = (sortOrder) => {
    // router.replace({
    //   pathname:"/about",
    //   query: queryParram
    // })
    // router.refresh();
    setSt(st + 1);
    // const params = new URLSearchParams(window.location.search);
    // params.set("sort", sortOrder);
    // window.history.replaceState(null, "", `?${params}`);
  };

  useEffect(() => console.log("Component rendered"), []);
  const locale = useLocale();

  return (
    <div>
      <h1>Login Page</h1>
      <Button>Hello BA</Button>
      <Link href={{ pathname: "/about", query: queryParams }}>
        Go to About23
      </Link>
      <Select
        defaultValue={locale}
        onChange={changeLanguage}
        style={{ width: 120 }}
      >
        <Option value="en">English</Option>
        <Option value="id">Español</Option>
        <Option value="hindi">Hindi</Option>
        
      </Select>
      <h1>{t("title")}</h1>

      <Link href={`/about/${1}`}>Go to About23</Link>
      <LoginComp />
      <button onClick={() => updateSorting("asc")}>Sort Ascending</button>

      <button
        onClick={(e) => {
          console.log({
            pathname: "/about",
            query: queryParams,
          });
          e.preventDefault();
          window.history.pushState(null, "", "/about");

          // router.push(`/about?type=${queryParams.type}`);
          // router.push({
          //   pathname: `/about`,
          //   asPath: "/about",
          //   query: {},
          //   state: queryParams, // Hidden data
          // });
        }}
      >
        Routing
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          width: "50%",
          margin: "20px",
        }}
      >
        <p>{t("para1")}</p>
        <p>{t("para2")}</p>
      </div>
    </div>
  );
}
