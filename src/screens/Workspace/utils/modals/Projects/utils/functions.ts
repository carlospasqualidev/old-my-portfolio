import { IToggleCategory } from '../../../types';

export const toggleCategory = ({
  category,
  selectedCategory,
  setSelectedCategory,
}: IToggleCategory) => {
  if (selectedCategory.type === category) {
    setSelectedCategory({ type: 'none' });
  } else {
    setSelectedCategory({ type: category });
  }
};
