<h1><img src="./public/favicon.svg" width="32" height="32" alt="Dev Stack Builder Logo" align="center" />Dev Stack Builder</h1>

Dev Stack Builder is a responsive React application that helps developers explore modern web technologies and build their preferred development stack.

Users can browse frontend, backend, database, programming language, styling, DevOps, and development tools, then add their preferred technologies to a personal stack.

The project is built with React.js, Vite, Tailwind CSS, DaisyUI, JavaScript ES6+, React-Toastify, and local JSON data.

---

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript ES6+
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- HTML5
- CSS3

---

## Key Features

### 1. Explore Modern Technologies

Users can explore modern development technologies with useful information such as:

- Technology logo
- Name
- Description
- Category
- Difficulty level
- Rating
- Badge

Technology information is loaded from a local JSON file instead of being hardcoded inside React components.

### 2. Build Your Own Technology Stack

Users can add technologies to their personal development stack.

The stack system supports:

- Add to Stack
- Duplicate technology prevention
- Disabled state after adding
- Remove a single technology
- Remove all technologies
- Selected technology count
- Empty stack state

### 3. Responsive and Interactive Experience

The application is fully responsive across desktop, tablet, and mobile devices.

It also includes:

- Responsive navigation
- Responsive technology cards
- Responsive stack panel
- Loading spinner
- React-Toastify notifications
- Shared gradient brand theme
- Interactive buttons and selected states

---

## Project Structure

```text
a5-dev-stack-builder/
│
├── public/
│   ├── data/
│   │   └── technologies.json
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── hero-image.png
│   │   │
│   │   └── icons/
│   │       ├── logo.svg
│   │       ├── react.svg
│   │       ├── vue.svg
│   │       ├── svelte.svg
│   │       ├── nextjs.svg
│   │       ├── nodejs.svg
│   │       ├── postgresql.svg
│   │       ├── redis.svg
│   │       ├── javascript.svg
│   │       ├── typescript.svg
│   │       ├── java.svg
│   │       ├── tailwindcss.svg
│   │       └── docker.svg
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── hero/
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── technologies/
│   │   │   ├── Technologies.jsx
│   │   │   ├── TechnologyCard.jsx
│   │   │   └── TechnologyGrid.jsx
│   │   │
│   │   ├── stack/
│   │   │   ├── StackSidebar.jsx
│   │   │   └── StackItem.jsx
│   │   │
│   │   └── shared/
│   │       └── LoadingSpinner.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 📦 Technology Data

Technology information is stored inside:

```text
public/data/technologies.json
```

Each technology contains:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A declarative, component-based JavaScript library for building modern and interactive user interfaces.",
  "icon": "react.svg",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

The JSON data is loaded using `fetch()` inside React instead of hardcoding the technology array inside a component.

---

## 🔔 React-Toastify

React-Toastify is used to show notifications when users interact with their stack.

Notifications are shown for:

- Adding a technology
- Duplicate add attempts
- Removing a technology
- Removing all technologies

Example:

```js
toast.success(`${technology.name} added to your stack.`);
```

---

## ⏳ Loading State

A loading state is shown while the technology JSON data is being fetched.

The project uses a DaisyUI loading spinner:

```jsx
<span className="loading loading-spinner loading-lg"></span>
```

This provides visual feedback while the technology data is loading.

---

## 🎨 Gradient Brand Theme

The project uses one shared gradient for important brand elements.

The same gradient is used for:

- Hero highlighted heading
- Technology section highlighted heading
- Primary buttons
- Selected technology card border
- Added button state
- Other brand-related UI elements

Because the gradient is defined in one place, the website theme can easily be changed later.

---

## 📱 Responsive Design

The project is designed to work across different screen sizes.

### Desktop

- 3-column technology card layout
- Your Stack appears beside the technology grid
- Full desktop navigation is visible

### Tablet

- 2-column technology card layout
- Content automatically adjusts to available space

### Mobile

- 1-column technology card layout
- Hamburger navigation menu
- Centered hero content
- Hero buttons remain inline
- Your Stack appears below the technology cards

---

# 📘 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript.

It makes React components easier to read and helps us build user interfaces in a simple way.

Example:

```jsx
<h1>Dev Stack Builder</h1>
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

In this project, technology information is passed to components using props, while selected technologies are managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

In this project, I used `useState` to manage:

- Technology data
- Selected stack technologies
- Loading state
- Error state
- Mobile navigation state

Example:

```js
const [selectedStack, setSelectedStack] = useState([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

I used it to load the technology JSON data when the Technologies component first loads.

Example:

```js
useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/data/technologies.json");
    const data = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);
```

The empty dependency array means the effect runs when the component first loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a list.

A unique key helps React efficiently update the correct item when the list changes.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, every technology has its own unique `id`.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used conditional rendering inside the Your Stack section.

If no technology is selected, the empty state is shown. If technologies are selected, the stack items are displayed.

Example:

```jsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  selectedStack.map((technology) => (
    <StackItem
      key={technology.id}
      technology={technology}
    />
  ))
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child component using **props**.

Example:

```jsx
<TechnologyCard technology={technology} />
```

Here, `technology` is passed from the parent component to the child component.

A child component can communicate back to the parent by calling a function passed through props.

Example:

```jsx
<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>
```

The child can then call:

```js
onAdd(technology);
```

This allows the parent component to update the selected stack.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/NSniha/dev-stack-builder
```

Go to the project folder:

```bash
cd dev-stack-builder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

---

## 📦 Main NPM Packages

The main packages used in this project are:

```text
react
react-dom
react-toastify
tailwindcss
@tailwindcss/vite
daisyui
```

---

## 👩‍💻 Author

Developed as a React assignment project.

---

## 📄 License

This project is created for educational purposes.