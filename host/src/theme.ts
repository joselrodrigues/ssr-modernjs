import { sketchy } from '@theme-ui/presets';

// Extend sketchy theme to include font loading
export default {
  ...sketchy,
  styles: {
    ...sketchy.styles,
    root: {
      ...sketchy.styles?.root,
      fontFamily: 'body',
    },
  },
};
