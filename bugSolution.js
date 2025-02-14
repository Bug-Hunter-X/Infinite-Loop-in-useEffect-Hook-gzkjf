```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation with dependency array
    setCount(count + 1); 
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```