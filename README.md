# **FIP Frontend - Week 10: Deliverable (React Deployment & Routing**)

![React Router Deployment](https://img.shields.io/badge/React%20Router-SPA%20Navigation-blue?style=flat&logo=react)  
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-green?style=flat&logo=github)  
![Status](https://img.shields.io/badge/Status-Completed-success)

## **📌 Project Overview**

This project demonstrates the **deployment** of a **Single Page Application (SPA) using React Router**. The app highlights the benefits of **React Router** and provides smooth **client-side navigation** without full-page reloads.

🔹 **Built with:** React, Vite, React Router  
🔹 **Deployment:** GitHub Pages

## **📚 Key Features**

✅ **React Router** for seamless page transitions  
✅ **Client-Side Routing** for a better user experience  
✅ **Single Page Application (SPA) architecture**  
✅ **Deployed using GitHub Pages**

## **🚀 Live Demo**

👉 [View Deployed App](https://brilliant-smart.github.io/FIP-FrontEnd-Week-10/)

## **📦 Installation & Setup**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/brilliant-smart/FIP-FrontEnd-Week-10.git
cd FIP-FrontEnd-Week-10
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the App Locally**

```sh
npm run dev
```

App will be available at **`http://localhost:5173/`**

---

## **🌍 Deployment on GitHub Pages**

To deploy this app on **GitHub Pages**, follow these steps:

1️⃣ **Update `vite.config.js`** with the correct `base` path:

```js
export default defineConfig({
  base: "/FIP-FrontEnd-Week-10/",
  plugins: [react()],
});
```

2️⃣ **Install `gh-pages`**

```sh
npm install gh-pages --save-dev
```

3️⃣ **Update `package.json`** scripts:

```json
"homepage": "https://brilliant-smart.github.io/FIP-FrontEnd-Week-10/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4️⃣ **Deploy the App**

```sh
npm run deploy
```

---

## **👨‍💻 Author**

🔹 **GitHub**: [brilliant-smart](https://github.com/brilliant-smart)
