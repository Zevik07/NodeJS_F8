module.exports = {
  increaseOne: (a) => {
    return ++a;
  },
  getSortUrl: (name, _sort) => {
    if (name !== _sort.col) return `?_sort&col=${name}&type=default`;

    switch (_sort.type) {
      case 'default':
        return `?_sort&col=${name}&type=asc`;
        break;
      case 'asc':
        return `?_sort&col=${name}&type=desc`;
        break;
      case 'desc':
        return `?_sort&col=${name}&type=default`;
        break;

      default:
        return '';
        break;
    }
  },
  getSortIcon: (name, _sort) => {
    if (name != _sort.col) return '<i class="fa-solid fa-sort"></i>';

    switch (_sort.type) {
      case 'default':
        return '<i class="fa-solid fa-sort"></i>';
        break;
      case 'asc':
        return '<i class="fa-solid fa-sort-up"></i>';
        break;
      case 'desc':
        return '<i class="fa-solid fa-sort-down"></i>';
        break;

      default:
        break;
    }
  },
};
