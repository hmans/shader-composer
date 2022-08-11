---
"shader-composer": patch
---

Fixed a bug where using a vector unit's `.x`, `.y` etc. accessors would result in the original unit being included in the shader twice.
