import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '36ced011c2fe47eb83f921fc3957d52e',
  },
});
