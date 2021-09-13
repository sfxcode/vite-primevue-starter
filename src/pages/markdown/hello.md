---
name: My Cool App
---

# Hello World

This is {{frontmatter.name}}

* Part 1
* Part 2
* Part 3

```js
import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
```

