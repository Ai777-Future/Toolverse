# 📱 ToolVerse - Centralized Responsive CSS

Yeh folder mein **sabhi pages ki media queries** ek hi jagah organized hain.

## 📂 Files

- **`responsive.css`** - Sabhi pages ke liye centralized responsive CSS

## 🎯 Kaise Use Karein

### Method 1: Direct Link (Recommended)

Har page ke `<head>` section mein yeh line add karo:

```html
<link rel="stylesheet" href="/Tools/String Size Tool/FINAL/RESPONSIVE FILES/responsive.css">
```

**Important:** Apne page ke body tag mein appropriate class add karo:

```html
<!-- Auth Page ke liye -->
<body class="auth-page">

<!-- Case Converter ke liye -->
<body class="case-converter">

<!-- Documentation pages ke liye -->
<body class="doc-page">

<!-- Home page ko koi class nahi chahiye -->
<body>
```

### Method 2: Individual Page CSS mein Import

Agar tum chahte ho ki har page ki apni CSS file mein responsive code ho, toh CSS file ke end mein add karo:

```css
@import url('/Tools/String Size Tool/FINAL/RESPONSIVE FILES/responsive.css');
```

## 📋 Pages Covered

### ✅ 1. Auth Page
- **File:** `AUTH PAGE/auth.html`
- **Body Class:** `auth-page`
- **Features:** Login form, glassmorphism, social buttons

### ✅ 2. Case Converter Tool
- **File:** `CASE-CONVERTER TOOL/index.html`
- **Body Class:** `case-converter`
- **Features:** Text conversion, buttons, info sections

### ✅ 3. Documentation Pages (3 pages)
- **Files:** 
  - `DOCUMANTATION PAGE/index.html`
  - `DOCUMANTATION PAGE/Tool-catogories.html`
  - `DOCUMANTATION PAGE/Tool-Overview.html`
- **Body Class:** `doc-page` (teeno pages ke liye same)
- **Features:** Sidebar, grid layout, documentation content

### ✅ 4. Home Page
- **File:** `HOME PAGE/home.html`
- **Body Class:** None needed
- **Note:** Home page ki media queries already `home.css` mein hain

## 📱 Responsive Breakpoints

Sabhi pages ke liye:

- **≤1200px** - Large Tablets
- **≤1024px** - Tablets
- **≤768px** - Small Tablets / Large Phones
- **≤480px** - Mobile Devices
- **≤360px** - Very Small Mobile
- **Landscape Mode** - Mobile landscape orientation

## 🔧 Customization

Agar kisi specific page ke liye changes chahiye:

1. `responsive.css` file open karo
2. Apne page ka section dhundho (comments se marked hai)
3. Wahan changes karo
4. Save karo - sabhi pages automatically update ho jayenge!

## ⚠️ Important Notes

1. **Body Classes:** Har page ko sahi body class dena zaroori hai, warna responsive styles apply nahi hongi
2. **Order:** `responsive.css` ko apne page ki main CSS file ke **baad** link karo
3. **Home Page:** Home page already responsive hai, usko alag se class nahi chahiye

## 🎨 Example Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page</title>
    
    <!-- Main CSS pehle -->
    <link rel="stylesheet" href="your-main-styles.css">
    
    <!-- Responsive CSS baad mein -->
    <link rel="stylesheet" href="/Tools/String Size Tool/FINAL/RESPONSIVE FILES/responsive.css">
</head>
<body class="your-page-class">
    <!-- Your content -->
</body>
</html>
```

## 📞 Help

Agar koi problem ho toh:
1. Check karo ki body class sahi hai
2. Check karo ki responsive.css link sahi path pe hai
3. Browser console mein errors check karo

---

**Made with ❤️ by Sandeep Singh**