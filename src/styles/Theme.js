const color = {
  main: '#FFA31A',
  red: '#D55555',

  black_1: '#343434',
  black_2: '#6f6f6f',
  black_3: '#9d9d9d',

  white_1: '#FFF',

  gray_1: '#EEE',
  gray_2: '#D9D9D9',
  gray_3: '#CCC',
  gray_4: '#B3B3B3'
};

const style = {
  border_dark: '1px solid #9A9A9A',
  border_light: '1px solid #EAEAEA',
  border_main: `1px solid ${color.main}`,

  edge_padding: '15px',
  header_height: '50px',
  inner_height: 'calc(100% - 50px)'
};

const font = {
  xs: '0.8rem',
  sm: '0.92rem',
  md: '1.2rem',
  lg: '1.5rem'
};

const theme = {
  color,
  style,
  font
};

export default theme;
