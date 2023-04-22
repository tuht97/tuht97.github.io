import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Việt Lôi',
  origin: 'https://tuht97.github.io',
  basePathname: '/',
  trailingSlash: false,

  title: 'Việt Lôi — CÔNG TY TNHH MTV TM & KT VIỆT LÔI',
  description:
    '⚡ Công ty chuyên nghiệp uy tín trong lĩnh vực tư vấn cung cấp giải pháp chống sét trực tiếp chống sét lan truyền và hệ thống tiếp địa an toàn',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  product: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'products', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const PRODUCT = CONFIG.product;
export const DATE_FORMATTER = CONFIG.dateFormatter;
