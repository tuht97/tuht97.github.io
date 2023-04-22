import { getAsset } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [
    {
      type: 'button',
      text: 'Download Catalogue',
      href: 'https://drive.google.com/file/d/1CkTyr9oxA2nlrXCB15Ox-f2fqn2I26s5/view?fbclid=IwAR2Vg-NJlzbmuU_2sXcJrcvJ_5yNO1R8tYgTPUeHkwbEt_ykkTN1EepXaCI',
    },
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: 'Product',
  //     links: [
  //       { text: 'Features', href: '#' },
  //       { text: 'Security', href: '#' },
  //       { text: 'Team', href: '#' },
  //       { text: 'Enterprise', href: '#' },
  //       { text: 'Customer stories', href: '#' },
  //       { text: 'Pricing', href: '#' },
  //       { text: 'Resources', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Platform',
  //     links: [
  //       { text: 'Developer API', href: '#' },
  //       { text: 'Partners', href: '#' },
  //       { text: 'Atom', href: '#' },
  //       { text: 'Electron', href: '#' },
  //       { text: 'AstroWind Desktop', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Support',
  //     links: [
  //       { text: 'Docs', href: '#' },
  //       { text: 'Community Forum', href: '#' },
  //       { text: 'Professional Services', href: '#' },
  //       { text: 'Skills', href: '#' },
  //       { text: 'Status', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'About', href: '#' },
  //       { text: 'Blog', href: '#' },
  //       { text: 'Careers', href: '#' },
  //       { text: 'Press', href: '#' },
  //       { text: 'Inclusion', href: '#' },
  //       { text: 'Social Impact', href: '#' },
  //       { text: 'Shop', href: '#' },
  //     ],
  //   },
  // ],
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/Ch%E1%BB%91ng-S%C3%A9t-Vi%E1%BB%87t-L%C3%B4i-1957864830954100/',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  <div>
  <div class="font-bold text-lg">CÔNG TY TNHH MTV TM & KT VIỆT LÔI</div>
  <div>SĐT: 090 747 572</div>
  <div>EMAIL: sonvietloi@gmail.com</div>
  </div>
  <div>Made by ⚡ <span class="highlight font-semibold">VietLoi</span> · All rights reserved.</div>
`,
};
