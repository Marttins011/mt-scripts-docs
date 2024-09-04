import React from 'react'
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

function useHead() {
  const { frontMatter, title } = useConfig();
  const description = frontMatter.description || "Documentation for the MT Scripts";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://i.ibb.co/7CQ0yL0/Logo-PNG-2-K.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "MT Scripts";
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? "Documentation" : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <img src="https://i.ibb.co/7CQ0yL0/Logo-PNG-2-K.png" alt="Logo" style={{ width: 80, height: 80 }} />
      <span style={{ fontSize: 20, fontWeight: 'bold' }}>MT Scripts</span>
    </div>
  ),
  project: {
    link: 'https://mt-scritps.tebex.io',
  },
  chat: {
    link: 'https://discord.gg/mt-scripts-938807603595706389',
  },
  docsRepositoryBase: 'https://github.com/MT-Scripts',
  footer: {
    text: 'MT Scripts Documentation',
  },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
}

export default config
