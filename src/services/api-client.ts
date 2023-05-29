import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '36ced011c2fe47eb83f921fc3957d52e',
  },
});

export class APIService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config?: any) => {
    return apiClient.get(this.endpoint, config).then((res) => {
      console.log('--->', config);
      console.log('res--->', res);
      return res?.data || null;
    });
  };
}
