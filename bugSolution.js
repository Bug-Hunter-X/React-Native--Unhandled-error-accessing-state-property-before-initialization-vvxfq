The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access the `name` property. This ensures that if `data` is `null` or `undefined`, the code won't throw an error.  A default value is displayed instead.

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> {/* Safe access */}
    </View>
  );
};
```

Alternatively, you can use a conditional rendering to only display the data once it's available:

```javascript
  return (
    <View>
      {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
```