export const LINKS = {
  consult:
    'https://docs.google.com/forms/d/e/1FAIpQLSf36TbFSdfWdQyvyQRXRLb8gM6a4WIlsS2iLDue7bsd5DUkBg/viewform?usp=sf_link',
  whatsapp: 'https://wa.me/919028339548',
  instagram: 'https://www.instagram.com/prithavi_money/',
  facebook: 'https://www.facebook.com/116822131416709',
  linktree: 'https://linktr.ee/prithavimoney',
  maps: 'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Subhash Tekdi, behind Takshisila Vidyalay, Bharatnagar, Kailash Colony, Ulhasnagar, Maharashtra 421004',
    ),
} as const

export const CONTACT = {
  name: 'Prithavi Money',
  phoneDisplay: '+91 90283 39548',
  instagramHandle: '@prithavi_money',
  facebookName: 'Prithavi Money',
  addressLines: [
    'Subhash Tekdi, behind Takshisila Vidyalay,',
    'Bharatnagar, Kailash Colony,',
    'Ulhasnagar, Maharashtra 421004',
  ],
} as const

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Prithavi', href: '#why' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
