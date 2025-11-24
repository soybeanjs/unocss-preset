# @soybeanjs/unocss-preset

Unocss preset for SoybeanJS

## Installation

```bash
pnpm add -D @soybeanjs/unocss-preset
```

## Usage

```ts
// uno.config.ts
import { defineConfig } from 'unocss';
import { presetSoybeanJS } from '@soybeanjs/unocss-preset';

export default defineConfig({
  presets: [
    presetSoybeanJS()
  ]
});
```

## Shortcuts

### Flexbox

| Shortcut | CSS |
| --- | --- |
| `flex-center` | `flex justify-center items-center` |
| `flex-x-center` | `flex justify-center` |
| `flex-y-center` | `flex items-center` |
| `flex-c` | `flex flex-col` |
| `flex-c-center` | `flex-center flex-col` |
| `flex-c-stretch` | `flex-c items-stretch` |
| `i-flex-center` | `inline-flex justify-center items-center` |
| `i-flex-x-center` | `inline-flex justify-center` |
| `i-flex-y-center` | `inline-flex items-center` |
| `i-flex-c` | `inline-flex flex-col` |
| `i-flex-c-center` | `i-flex-center flex-col` |
| `i-flex-c-stretch` | `i-flex-c items-stretch` |
| `flex-1-hidden` | `flex-1 overflow-hidden` |
