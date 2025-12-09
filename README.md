# Deploying Your Portfolio Website

## What You Have

Your portfolio is a single HTML file (`index.html`) that contains everything - the design, content, and functionality. No build process needed.

---

## STEP-BY-STEP: Publishing to GitHub Pages (Free)

### Step 1: Prepare Your Files

Create a folder on your computer called `portfolio` with this structure:

```
portfolio/
├── index.html          (the file I created)
└── assets/
    ├── profile.jpg     (your profile photo)
    └── conf/
        ├── rsna-2025-1.jpg
        ├── rsna-2025-2.jpg
        ├── spie-2025-1.jpg
        ├── spie-2025-2.jpg
        ├── spie-2024-1.jpg
        ├── spie-2024-2.jpg
        ├── conf-7.jpg
        ├── conf-8.jpg
        ├── conf-9.jpg
        └── conf-10.jpg
```

### Step 2: Add Your Images

1. **Profile photo**: Save your photo as `assets/profile.jpg`
2. **Conference photos**: Save your 10 conference photos in `assets/conf/` folder

### Step 3: Update Image References

Open `index.html` in any text editor (like Notepad or TextEdit).

For the **profile image**, find this line (around line 200):
```html
<img src="assets/profile.jpg" alt="Akhil V. Kasturi" class="hero-image">
```
Make sure your profile photo is named `profile.jpg` in the assets folder.

For **conference photos**, find the gallery section (around line 360) and replace the placeholder divs with actual images. Change each gallery item from:
```html
<div class="gallery-item">
    <div class="gallery-placeholder">RSNA 2025 — Chicago<br>Drop image here</div>
    <div class="gallery-caption"><span>RSNA 2025 — Chicago</span></div>
</div>
```

To:
```html
<div class="gallery-item">
    <img src="assets/conf/rsna-2025-1.jpg" alt="RSNA 2025">
    <div class="gallery-caption"><span>RSNA 2025 — Chicago</span></div>
</div>
```

### Step 4: Upload to GitHub

1. **Go to GitHub.com** and sign in (or create an account)

2. **Create a new repository**:
   - Click the "+" icon in the top right → "New repository"
   - Name it exactly: `yourusername.github.io` (e.g., `akast7.github.io`)
   - Make it **Public**
   - Check "Add a README file"
   - Click "Create repository"

3. **Upload your files**:
   - In your new repository, click "Add file" → "Upload files"
   - Drag and drop your entire `portfolio` folder contents (index.html and assets folder)
   - Click "Commit changes"

### Step 5: Enable GitHub Pages

1. Go to your repository's **Settings** (gear icon)
2. In the left sidebar, click **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 2-3 minutes

### Step 6: Visit Your Live Site!

Your site is now live at: `https://yourusername.github.io`

---

## Quick Customizations (No Coding Needed)

### Update Your Profile Info
Search for these text strings and replace them:
- `akasturi@ur.rochester.edu` → your email
- `https://github.com/akast7` → your GitHub
- `https://linkedin.com/in/akhil-v-k-21069711b` → your LinkedIn

### Add New News Items
Find the "news-grid" section and copy this template:
```html
<div class="news-item">
    <span class="news-date">Month 2025</span>
    <h3 class="news-headline">Your Headline</h3>
    <p class="news-desc">Your description text.</p>
</div>
```

### Add New Publications
Find the "pub-list" section and copy this template:
```html
<div class="pub-item" data-year="2025" data-type="first">
    <div class="pub-marker first-author"></div>
    <div>
        <p class="pub-title">Paper Title</p>
        <p class="pub-authors"><strong>Your Name</strong>, Coauthor Names</p>
        <p class="pub-venue">Journal/Conference Name, Year</p>
    </div>
    <a href="PAPER_URL" class="pub-link" target="_blank">Paper →</a>
</div>
```

Change `data-type="first"` to `data-type="co"` for co-authored papers.

---

## Alternative: Using a Custom Domain (Optional)

If you own a domain like `akhilkasturi.com`:

1. In your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:
   ```
   Type: A    Host: @    Points to: 185.199.108.153
   Type: A    Host: @    Points to: 185.199.109.153
   Type: A    Host: @    Points to: 185.199.110.153
   Type: A    Host: @    Points to: 185.199.111.153
   Type: CNAME    Host: www    Points to: yourusername.github.io
   ```

2. In GitHub Pages settings, enter your custom domain

3. Check "Enforce HTTPS"

---

## Need Help?

- GitHub Pages documentation: https://docs.github.com/pages
- Your site URL: https://yourusername.github.io
