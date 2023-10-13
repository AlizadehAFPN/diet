import {TagCategory} from '../Interface';

// Query options for fetching recipes
export const queryOptions = {
  variables: {
    page: 1,
    pageSize: 20,
    tagFilters: [],
    premiumOnly: false,
    notifyOnNetworkStatusChange: true,
    includePremiumPreview: false,
  },
  notifyOnNetworkStatusChange: true,
};

export const offlineOptions: TagCategory[] = [
  {
    title: 'recipe_tag',
    lists: [
      {id: 'wp-us-tag-1247', title: 'Beverage', type: 'recipe_type'},
      {
        id: 'wp-us-tag-586',
        type: 'recipe_tag',
        title: 'egg-free',
      },
      {
        id: 'wp-us-tag-1441',
        type: 'recipe_tag',
        title: 'mealplan-ready',
      },
    ],
  },
  {
    title: 'recipe_diet',
    lists: [
      {
        id: 'wp-us-tag-1392',
        type: 'recipe_diet',
        title: 'Vegan',
      },
      {
        id: 'wp-us-tag-1393',
        type: 'recipe_diet',
        title: 'Vegetarian',
      },
      {
        id: 'wp-us-tag-1394',
        type: 'recipe_diet',
        title: 'Dairy Free',
      },
    ],
  },
  {
    title: 'energy-1',
    lists: [
      {
        id: 'wp-us-tag-3',
        type: 'energy',
        title: 'liberal',
      },
    ],
  },
  {
    title: 'energy',
    lists: [
      {
        id: 'wp-us-tag-4',
        type: 'ease',
        title: 'beginner',
      },
    ],
  },
];
