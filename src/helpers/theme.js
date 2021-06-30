export const headerHeightDefault = ({ theme: { header } }) =>
  header.height.default && header.height.default;

export const headerHeightMobile = ({ theme: { header } }) =>
  header.height.mobile && header.height.mobile;

export const tabletBp = ({
  theme: {
    general: { breakpoints }
  }
}) => breakpoints.tablet && breakpoints.tablet;
