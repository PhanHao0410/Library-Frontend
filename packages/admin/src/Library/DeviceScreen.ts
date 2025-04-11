interface IFormDevice {
  xs: string;
  pn: string;
  sm: string;
  md: string;
  lg: string;
  al?: string;
  xl: string;
  '2xl': string;
  maxlg?: string;
  maxsm?: string;
  maxXl?: string;
  maxmd?: string;
  maxpn?: string;
  maxal?: string;
}
const breakpoints: IFormDevice = {
  xs: '320px',
  pn: '480px',
  sm: '600px',
  md: '768px',
  lg: '960px',
  al: '1020px',
  xl: '1280px',
  '2xl': '1536px',
  maxlg: '960px',
  maxsm: '600px',
};

export const devices: IFormDevice = {
  xs: `(min-width: ${breakpoints.xs})`,
  pn: `(min-width: ${breakpoints.pn})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  al: `(min-width: ${breakpoints.al})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
  maxlg: `(max-width: ${breakpoints.maxlg})`,
  maxsm: `(max-width: ${breakpoints.maxsm})`,
  maxXl: `(max-width: ${breakpoints.xl})`,
  maxmd: `(max-width: ${breakpoints.md})`,
  maxpn: `(max-width: ${breakpoints.pn})`,
  maxal: `(max-width: ${breakpoints.al})`,
};
