```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because it sets count in every render
    setCount(count + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```