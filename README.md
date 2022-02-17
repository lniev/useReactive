# react state proxy hook

Proxy react setState, you can assign values directly to use reactive state. like this:

```javascript
  const [state, setState] = useReactive({name: 'Peter'});
  ...
  // somewhere
  state.name = 'Mike' // Then the page will re-render

  // or
  const [state, setState] = useReactive(["Peter"]);

  // somewhere
  state[0] = "Mike"; // Then the page will re-render
```

try it yourself

### Introducing the article address

[lniev-juejin](https://juejin.cn/post/7049002929486823437)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
