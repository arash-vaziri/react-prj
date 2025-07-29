# Dark Mode with Chakra UI v3

This project demonstrates how to implement dark mode using Chakra UI v3 with `next-themes`.

## How it works

The dark mode implementation uses the existing Chakra UI setup with `next-themes`:

1. **Provider Setup**: The `Provider` component in `src/components/ui/provider.tsx` wraps the app with both `ChakraProvider` and `ColorModeProvider` (from next-themes).

2. **Color Mode Hook**: The `useColorMode` hook in `src/components/ui/color-mode.tsx` provides color mode functionality using next-themes.

3. **Simple Hook**: The `useDarkMode` hook in `src/hooks/useDarkMode.ts` provides a clean interface for dark mode functionality.

## Usage

### Basic Usage

```tsx
import { useDarkMode } from "@/hooks/useDarkMode";

function MyComponent() {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useDarkMode();
  
  return (
    <div>
      <p>Current mode: {isDarkMode ? "Dark" : "Light"}</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <button onClick={() => setDarkMode(true)}>Force Dark</button>
      <button onClick={() => setDarkMode(false)}>Force Light</button>
    </div>
  );
}
```

### Using Chakra UI Components with Dark Mode

Chakra UI components automatically support dark mode through the `_dark` prop:

```tsx
import { Box, Text } from "@chakra-ui/react";

function MyComponent() {
  return (
    <Box 
      bg="gray.100" 
      _dark={{ bg: "gray.800" }}
      p={4}
    >
      <Text color="gray.900" _dark={{ color: "gray.100" }}>
        This text adapts to the current theme
      </Text>
    </Box>
  );
}
```

### CSS Variables

The project includes CSS variables for consistent theming:

```css
:root {
  --chakra-colors-bg: #ffffff;
  --chakra-colors-fg: #1a202c;
}

[data-theme="dark"] {
  --chakra-colors-bg: #1a202c;
  --chakra-colors-fg: #ffffff;
}
```

## Key Files

- `src/components/ui/provider.tsx` - Main provider setup
- `src/components/ui/color-mode.tsx` - Color mode utilities (Chakra-generated)
- `src/hooks/useDarkMode.ts` - Simple dark mode hook
- `src/index.css` - CSS variables for theming
- `src/main.tsx` - App setup with dark mode enabled by default

## Configuration

The dark mode is configured in `src/main.tsx`:

```tsx
<Provider themes={["light", "dark"]} defaultTheme="dark">
  <App />
</Provider>
```

This sets up:
- Available themes: `["light", "dark"]`
- Default theme: `"dark"`
- Theme persistence through localStorage (handled by next-themes)

## Benefits

1. **No modifications to Chakra-generated files** - All original files remain unchanged
2. **Simple hook interface** - Easy to use with `useDarkMode()`
3. **Automatic persistence** - Theme preference is saved in localStorage
4. **CSS variable support** - Consistent theming across the app
5. **Chakra UI integration** - Works seamlessly with Chakra components 