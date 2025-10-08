import { sketchy } from '@theme-ui/presets';

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
