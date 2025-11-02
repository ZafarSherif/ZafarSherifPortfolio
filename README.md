# Casino Game Developer Portfolio

A modern, responsive portfolio website for showcasing your casino game development work. Built with vanilla HTML, CSS, and JavaScript - optimized for GitHub Pages hosting.

## ✨ Features

- **Modern Design:** Dark theme with casino-inspired gold accents and smooth animations
- **Fully Responsive:** Mobile-first design that looks great on all devices
- **Performance Optimized:** Fast loading, minimal dependencies, scalable architecture
- **Interactive Elements:** Smooth scrolling, parallax effects, card animations
- **Google Analytics Ready:** Track visitors and user engagement
- **SEO Friendly:** Semantic HTML5 markup and meta tags

## 🚀 Quick Start

### 1. Customize Your Content

Edit `index.html` and replace the placeholder content:

- **Personal Information:**
  - Your name (multiple places)
  - Your email address
  - GitHub profile URL
  - LinkedIn profile URL

- **About Section:**
  - Update your bio and description
  - Modify the quick facts icons/text

- **Resume Section:**
  - Add your work experience
  - Update skills and technologies
  - Add your education details

- **Projects Section:**
  - Replace with your actual casino game projects
  - Update project descriptions and tech stacks

- **Fun Facts Section:**
  - Personalize with your actual interests and hobbies

### 2. Add Your Images

Place your images in the `assets/images/` folder:

- `profile.jpg` - Your professional photo (800x800px recommended)
- `project1.jpg` - Casino game screenshot #1
- `project2.jpg` - Casino game screenshot #2
- `project3.jpg` - Casino game screenshot #3

See `assets/images/README.md` for detailed image guidelines.

### 3. Set Up Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. In `index.html`, replace **both** instances of `GA_MEASUREMENT_ID` with your actual ID:

```html
<!-- Line 10 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Line 14 -->
gtag('config', 'G-XXXXXXXXXX');
```

## 📦 Deploy to GitHub Pages

### Option 1: Deploy from main branch

1. **Initialize Git repository:**
   ```bash
   cd portfolioWebsite
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub repository:**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio`)
   - Don't initialize with README

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to **Pages** section (left sidebar)
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

5. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes to deploy

### Option 2: Deploy to username.github.io (Custom domain)

For a cleaner URL without the repository name:

1. Create a repository named **exactly**: `YOUR_USERNAME.github.io`
2. Follow steps 1 and 3 from Option 1
3. GitHub Pages will automatically deploy from the main branch
4. Your site will be available at: `https://YOUR_USERNAME.github.io/`

### Custom Domain (Optional)

To use your own domain (e.g., `www.yourname.com`):

1. Add a `CNAME` file to the root directory with your domain:
   ```
   www.yourname.com
   ```

2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository settings > Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 📊 Verify Google Analytics

After deploying:

1. Visit your live website
2. Go to Google Analytics dashboard
3. Check **Reports** > **Realtime** to see live visitors
4. Your visit should show up within seconds

## 🎨 Customization Tips

### Colors

Edit CSS variables in `assets/css/style.css` (lines 7-17):

```css
:root {
    --primary-color: #FFD700;      /* Gold accent */
    --secondary-color: #9D4EDD;    /* Purple */
    --accent-color: #FF6B6B;       /* Red */
    --dark-bg: #0a0a0a;            /* Background */
    --card-bg: #1a1a1a;            /* Card background */
}
```

### Adding More Projects

1. Duplicate a `.project-card` block in `index.html`
2. Add your new project image to `assets/images/`
3. Update the content and image src

### Contact Form Integration

The form is ready to integrate with services like:

- **Formspree:** https://formspree.io/ (easiest)
- **EmailJS:** https://www.emailjs.com/
- **Netlify Forms:** (if deploying to Netlify)

Uncomment and configure the fetch code in `assets/js/main.js` (lines 90-105).

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 File Structure

```
portfolioWebsite/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Styles
│   ├── js/
│   │   └── main.js        # JavaScript
│   └── images/            # Your images
│       ├── profile.jpg
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 📈 Scalability Features

- **Static Site:** No server-side processing = unlimited scalability
- **CDN Delivery:** GitHub Pages uses a global CDN
- **Optimized Assets:** Minimal CSS/JS, lazy loading images
- **Efficient Code:** No heavy frameworks, pure vanilla JavaScript
- **Cacheable:** Static files cached by browsers

## 🐛 Troubleshooting

**Site not loading after deployment:**
- Wait 5-10 minutes for GitHub Pages to build
- Check repository settings > Pages for deployment status
- Ensure repository is public (or you have GitHub Pro for private)

**Google Analytics not tracking:**
- Verify you replaced BOTH instances of `GA_MEASUREMENT_ID`
- Check browser console for errors
- Disable ad blockers when testing
- Wait 24-48 hours for data to populate reports

**Images not showing:**
- Verify image file names match exactly (case-sensitive)
- Check images are in `assets/images/` folder
- Ensure images are committed to git

**Mobile menu not working:**
- Clear browser cache
- Check JavaScript console for errors

## 📝 Resume PDF

Add your resume PDF:
1. Name it `resume.pdf`
2. Place it in the `assets/` folder
3. The download button is already linked to `assets/resume.pdf`

## 🎯 Performance Tips

- Compress images before uploading (use TinyPNG, ImageOptim)
- Keep images under 300KB each
- Use WebP format for better compression (optional)
- Minimize external dependencies

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🤝 Credits

Built with ❤️ and lots of coffee.

---

**Need help?** Open an issue or refer to [GitHub Pages documentation](https://docs.github.com/en/pages).

**Good luck with your portfolio! 🎰🎮**
