# Nomatron Theme

A modern and elegant Hugo theme specifically designed for SaaS websites. Built with TailwindCSS, this theme provides a clean, professional look while maintaining excellent performance and customization options.

[Demo Site](https://nomatron-demo.netlify.app/)

## Requirements

- Hugo Extended Version (>= 0.150)
- Node.js (>= 20.x)

## Installation

### 1. Create a new Hugo site (skip if you have an existing site)

```bash
hugo new site your-site-name
cd your-site-name
```

### 2. Add the theme

Put theme files in ```your-site-name/themes/```

### 3. Example Site

The theme comes with a fully functional example site that demonstrates its features and capabilities. You can use this as a reference when building your own site.

### Using the Example Site

The example site provides a great starting point to understand how to:
- Structure your content
- Use different page layouts
- Configure navigation menus
- Set up site parameters

1. Copy the example site content:
```bash
cp -r themes/nomatron/exampleSite/* .
```

2. The example site includes:
- Complete content structure with sample pages
- Feature pages
- Company information page
- Properly configured hugo.toml

### 4. Install dependencies

```bash
# Copy package.json and other config files to your site root
cp themes/nomatron/package.json .
```

```bash
# Install dependencies
npm install
```

### 5. Configure your Hugo site

Create or update your `hugo.toml` with the following configuration:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-US'
title = 'You Site Name'
theme = 'nomatron'

########## Menus
[menus]
  ########## Main/Header
  [[menus.main]]
    name = 'Home'
    pageRef = '/'
    weight = 10

  [[menus.main]]
    name = "About"
    pageRef = "/about/"
    weight = 20

  [[menus.main]]
    name = "Waitlist"
    pageRef = "/Waitlist/"
    weight = 30

  ########## Resources/Footer
  [[menus.resources]]
    name = 'Home'
    url = '/'
    weight = 10

  [[menus.resources]]
    name = 'About'
    url = '/about/'
    weight = 20

  ########## Legal/Footer
  [[menus.legal]]
    name = 'Privacy Policy'
    url = '/privacy-policy/'
    weight = 10



########## Params
[params]
  ########## favicon
  favicon = "favicon.png"

  ########## header params
  [params.header]
    logo = "images/logo.svg"
    [params.header.cta_btn]
      label = "Join the waitlist"
      link = "/"
    
  ########## footer params
  [params.footer]
    logo = "images/logo.svg"

  ########## socials
  [params.socials]
    linkedin = "https://linkedin.com"
    twitter = "https://x.com"
    bluesky = "https://bsky.app"
    instagram = "https://instagram.com"
    youtube = "https://youtube.com"



########## Modules
[module]
  [module.hugoVersion]
    extended = false
    min = '0.146.0'
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    disableWatch = true
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'
  [[module.mounts]]
    disableWatch = true
    source = 'node_modules/flowbite'
    target = 'assets/css/flowbite'


########## Tailwind Config
[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats\.json'
    target = 'css'
  [[build.cachebusters]]
    source = '(postcss|tailwind)\.config\.js'
    target = 'css'
```

This configuration includes:

- **Basic Settings**: Site title, language, and theme selection
- **Module Configuration**: Hugo version requirements
- **Build Settings**: Required for TailwindCSS integration
- **Markup Settings**: Code highlighting and markdown rendering options
- **Theme Parameters**: 
  - Header configuration with logo and navigation
  - Call-to-action (CTA)
  - Social media links
- **Navigation Menu**: Main menu and footer menu structure

## Development

To start the development server:

```bash
hugo server
```

This will:
- Run the Hugo development server

To build your site for production:

```bash
hugo
```

This will:
- Build and minify your TailwindCSS styles
- Generate minified Hugo site in the `public` directory

## Customization

### Colors & Typography

The theme uses a primary color scheme that can be customized in `assets/css/main.css`: <!-- You can copy this file from theme's assets directory. Note: Do not update files in the theme folder, copy files to your theme instead. -->
The theme uses Poppins font for any kind of text. You can modify this in `assets/css/main.css`: <!-- You've to replace font imoprt links from `layouts/_partials/head.html`. Note: Do not update files in the theme folder, copy files to your theme instead. -->

```css
@theme {
    --color-primary: #0F403D;
    --color-primary-light: #E0FFF4;
    --color-primary-green: #6BEBCB;
    --color-primary-dark: #000000;
    --color-cloud: #EDEFF7;
    --color-smoke: #D3D6E0;
    --color-steel: #BCBFCC;
    --color-space: #9DA2B3;
    --color-graphite: #6E7180;
    --color-arsenic: #40424D;
    --color-phantom: #1E1E24;

    --font-primary: "Poppins", sans-serif;
}
```

## Content Structure

```
content/
├── _index.md          # Homepage content
├── about.md              # About page content
├── privacy-policy.md          # Privacy Policy page content
└── thank-you.md              # Thank you page content
└── waitlist.md              # Waitlist page content
```
