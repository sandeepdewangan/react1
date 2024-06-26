## Tailwind CSS

1. Install Tailwind from website.
2. Install VS code package: headwind, tailwind.

### Important Properties

1. text-center: Utilities for controlling the alignment of text.
2. items-center: Utilities for controlling how flex and grid items are positioned along a container's cross axis. (Vertical)
3. justify-between: Utilities for controlling how flex and grid items are positioned along a container's main axis. (Horizontal)
4. mx-auto: Centers the content.
5. tracking-wide: Utilities for controlling the letter spacing of an element.
6. accent-color: Utilities for controlling the accented color of a form control.In CSS accent-color is used to change the colour of certain form elements such as progress , range inputs , radio inputs , and checkbox inputs.
7. inset: The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. The component must be positioned absolute.

### Re-using Tailwind Classes

#### METHOD 01: apply method

`index.css`

```css
@layer components {
  .input {
    @apply px-2 py-1 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500;
  }
}
```

Usage

```html
<input type="text" className="input" />
```

#### METHOD 02: React component

```js
function Button({ children }) {
  return (
    <button className="px-5 py-2 font-semibold bg-yellow-300 rounded-full">
      {children}
    </button>
  );
}
export default Button;
```

Usage

```js
<Button>Submit</Button>
```

### Custom Font

STEP 01:
Download Google font and paste the link into HTML.

STEP 02:
`tailwind.config.js`

```json
theme: {
    extend: {
      fontFamily: {
        myFont: "Playwrite NG Modern",
      },
    },
  },
```

STEP 03: Usage

```html
<p className="font-myFont">Demo Text</p>
```

STEP 04: Override the entire page font.

```json
theme: {
    fontFamily: {
      sans: ["Playwrite NG Modern", "sans-serif"],
    },
    extend: {},
  },
```

Apply font-sans to the body of html.

### Demo

<img src="tailwind.gif" />
