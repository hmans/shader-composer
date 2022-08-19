---
"shader-composer": patch
---

Added `Gradient`, a unit that samples a value from a gradient defined as a range of stops:

```jsx
const color = Gradient(
  heat,
  [new Color("#03071E"), 0],
  [new Color("#03071E"), 0.3],
  [new Color("#DC2F02"), 0.5],
  [new Color("#E85D04"), 0.6],
  [new Color("#FFBA08").multiplyScalar(2), 0.8],
  [new Color("white").multiplyScalar(2), 0.9]
)
```
