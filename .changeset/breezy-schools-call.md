---
"shader-composer": patch
---

Added the `varying(i, config?)` helper that will wrap the given input value in a new unit that is configured to use a varying. It's a neat little shortcut for quickly configuring existing values to be scoped to the vertex program, and made available to the fragment program via a varying.
