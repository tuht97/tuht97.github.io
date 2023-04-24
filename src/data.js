import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sản Phẩm',
      links: [
        {
          text: 'Kim Thu Sét',
          href: getPermalink('/category/kim-thu-set'),
        },
      ],
    },
  ],
  actions: [
    {
      type: 'button',
      text: 'Download Catalogue',
      href: 'https://drive.google.com/file/d/1CkTyr9oxA2nlrXCB15Ox-f2fqn2I26s5/view?fbclid=IwAR2Vg-NJlzbmuU_2sXcJrcvJ_5yNO1R8tYgTPUeHkwbEt_ykkTN1EepXaCI',
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/Ch%E1%BB%91ng-S%C3%A9t-Vi%E1%BB%87t-L%C3%B4i-1957864830954100/',
    },
    {
      ariaLabel: 'Zalo',
      icon: 'simple-icons:zalo',
      href: 'https://zalo.me/0907475572',
    },

    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  <div>
  <div class="font-bold text-lg">CÔNG TY TNHH MTV TM & KT VIỆT LÔI</div>
  <div>SĐT: 090 747 572</div>
  <div>EMAIL: <a href="mailto:sonvietloi@gmail.com">sonvietloi@gmail.com</a></div>
  </div>
  <div>Made by ⚡ <span class="highlight font-semibold">VietLoi</span> · All rights reserved.</div>
`,
};
