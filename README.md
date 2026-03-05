# Photos in Barcelona - Photography Portfolio Website

A modern, high-performance photography portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- 🎨 **Modern Design**: Luxury, minimal aesthetic with professional gradients and hover effects
- ⚡ **High Performance**: Built with Vite for fast development and production builds
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Meta tags, structured data, and optimized HTML
- ♿ **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- 🎬 **Smooth Animations**: Fade-in effects and smooth scrolling throughout
- 🦾 **Type-Safe**: Full TypeScript support for better developer experience

## Services Included

- Events Photography
- Brand Photography
- Product Photography
- Real Estate Photography

## Pages

- Home - Hero slider with services overview and testimonials
- Service Pages - Dedicated pages for each photography service
- Contact/Booking - Professional booking form with WhatsApp integration
- 404 - Custom 404 page

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/photosinbarcelona`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Option 1: Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Framework: Vite
4. Deploy

### Option 3: Traditional Hosting (cPanel, etc.)

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your hosting via FTP/SFTP
3. Ensure your server is configured to serve `index.html` for all routes (important for client-side routing)

#### Apache .htaccess Configuration

Create a `.htaccess` file in your public directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /photosinbarcelona/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /photosinbarcelona/index.html [L]
</IfModule>
```

#### Nginx Configuration

```nginx
server {
  listen 80;
  server_name photosbarcelona.com;

  root /var/www/photosbarcelona;

  location /photosinbarcelona {
    try_files $uri $uri/ /photosinbarcelona/index.html;
  }
}
```

## Customization

### Colors

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  'primary-dark': '#111111',
  'primary-light': '#F8F8F8',
  'primary-gray': '#EAEAEA',
  'accent': '#C65D3A',
}
```

### Contact Information

Update contact details in:
- `src/components/Header.tsx` - Header nav links
- `src/components/Footer.tsx` - Footer contact info
- `src/components/FloatingBookingButton.tsx` - WhatsApp number
- `src/pages/Contact.tsx` - Contact page details

### Content

Edit page content in respective files:
- Home: `src/pages/Home.tsx`
- Events: `src/pages/Events.tsx`
- Brand: `src/pages/PersonalBrand.tsx`
- Product: `src/pages/ProductPhotography.tsx`
- Real Estate: `src/pages/RealEstate.tsx`

## Performance Optimization

- Images are loaded on demand (lazy loading ready)
- CSS is tree-shaken and minified
- JavaScript is code-split per route
- Gzip compression enabled by default

## SEO Features

- Meta tags for social sharing
- Semantic HTML structure
- Fast page load times
- Mobile optimization
- Ready for schema markup

## License

Private - Photography Portfolio

## Support

For questions or customization, contact the photographer directly at:
- Email: info@photosbarcelona.com
- Phone: +34 600 000 000
- WhatsApp: https://wa.me/34600000000
