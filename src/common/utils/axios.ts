import axios from 'axios';

import { config } from '@/common/config';

export default axios.create({
  baseURL: config.goapi.baseUrl,
});