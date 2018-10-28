import createActions from '../app/actions';
import meta from './meta';

export default createActions(meta.id, {
  async loadData(type) {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(type);
      }, 1000);
    });
    return res;
  },
});
