# Frontend Website Clone

This is a frontend website built using **React, Tailwind CSS, and GSAP** for smooth animations. The project includes various animations, including text animations, page transitions, and interactive UI effects.

## 🚀 Features
- Fully responsive design with **Tailwind CSS**
- Smooth animations using **GSAP**
- Interactive UI elements

Optimized for performance  
![image alt](https://raw.githubusercontent.com/KrishChouhan486/portfolio-website/main/Screenshot%202025-02-16%20154332.png)

## 📌 Tech Stack
- **React.js** (Frontend framework)
- **Tailwind CSS** (Styling)
- **GSAP (GreenSock)** (Animations)

---

## 🔧 Installation & Setup
Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/frontend-clone.git
cd frontend-clone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Development Server
```sh
npm run dev
```
The website will be available at `https://meek-valkyrie-ed310a.netlify.app/` (if using Vite) or `https://meek-valkyrie-ed310a.netlify.app/` (if using Create React App).

---

## ✨ Animations Used

### 🔹 **Text Animation** (GSAP)
- Smooth fade-in effect for headings.
- Staggered animations for subheadings.
- Example:
  ```js
  import gsap from "gsap";
  import { useEffect } from "react";

  const AnimatedText = () => {
    useEffect(() => {
      gsap.from(".text", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
      });
    }, []);

    return <h1 className="text-4xl font-bold text text-center">Welcome to My Website</h1>;
  };

  export default AnimatedText;
  ```

### 🔹 **Page Transition Animation**
- Smooth transitions between pages.
- Example:
  ```js
  import gsap from "gsap";
  import { useEffect } from "react";

  const PageTransition = () => {
    useEffect(() => {
      gsap.from(".page", {
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }, []);

    return <div className="page p-10">This is a page with animation</div>;
  };

  export default PageTransition;
  ```

### 🔹 **Button Hover Animation**
- Hover effect using Tailwind.
- Example:
  ```jsx
  <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded">
    Hover Me
  </button>
  ```

---

## 📂 Folder Structure
```
frontend-clone/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Pages
│   ├── styles/            # Global styles
│   ├── App.js             # Main app component
│   ├── main.jsx           # Entry point
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── README.md              # Project documentation
```

---

## 🛠️ Customization
- Modify **Tailwind CSS** settings in `tailwind.config.js`.
- Edit animations in `src/components/` to add more GSAP effects.

---

## 🚀 Deployment
Deploy using **Vercel, Netlify, or GitHub Pages**.

[Example](https://meek-valkyrie-ed310a.netlify.app/) (netlify):
```sh
npm install -g vercel
vercel
```

---

## 🙌 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📃 License
This project is **MIT Licensed**.

---

## 📞 Contact
For any queries, contact me at **krishchouhan468@gmail.com** or connect on **[LinkedIn](https://www.linkedin.com/in/krishchouhan/)**.

---

Enjoy coding! 🚀

