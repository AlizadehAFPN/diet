import {authState} from '../redux/authSlice';
import {SearchState} from '../redux/search-slice';

export type NavigatorParamList = {
  navigate(arg0: string): unknown;
  search: undefined;
  filter: undefined;
};

export interface loginInterface {
  username: string;
  password: string;
}

export interface storeInterface {
  auth: authState;
  search: SearchState;
}

export interface Recipe {
  id: string;
  isMembersOnly: boolean;
  title: string;
  description: string;
  rating: number;
  modifiedAt: string;
  slug: string;
  nutrition: {
    values: {
      carbs: number;
      fat: number;
      protein: number;
      fiber: number;
      calories: number;
    };
    percentages: {
      carbs: number;
      fat: number;
      protein: number;
    };
  };
  time: {
    preparation: number;
    cook: number;
  };
  difficulty: {
    rating: string;
    value: number;
  };
  images: {
    hz: string;
    vt: string;
    brightness: string;
  };
  tags: Array<{
    id: string;
    type: string;
    title: string;
  }>;
  servings: {
    default: number;
    allowed: number[];
  };
  strictness: {
    rating: string;
    value: number;
  };
  instructionSections: Array<{
    title: string;
    header: {
      text: string;
    };
    footer: {
      text: string;
    };
    steps: string[];
  }>;
  tips: Array<{
    header: string;
    content: string[];
  }>;
  videos: string[];
}

export interface tag {
  id: string;
  type: string;
  title: string;
}
