---
"shader-composer": patch
---

Added `Lerp`, which is equivalent to `Mix`, and `InverseLerp(a, b, c)`, which returns the lerping ratio of `c` within `a` and `b`. Also added equivcalent `lerp` and `inverseLerp` expressions that can be used directly without wrapping the resulting values in Units.
