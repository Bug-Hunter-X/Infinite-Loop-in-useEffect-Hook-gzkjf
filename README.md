# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect usage of the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

**Problem:** The original component attempts to update the `count` state within the `useEffect` hook without any dependency array conditions. This leads to a continuous loop of state updates. 

**Solution:** The solution involves adding the `count` variable into the dependency array to resolve the issue.  The component will only update the state on initial render and not in every render cycle.