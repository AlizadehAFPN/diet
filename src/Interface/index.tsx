import {ReactNode} from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';

// Create smaller interfaces
export interface ImageType {
  hz: string;
  vt: string;
  brightness: string;
}

export interface DifficultyType {
  rating: string;
  value: number;
}

export interface TimeInterface {
  preparation: number;
  cook: number;
}

export interface tag {
  id: string;
  type: string;
  title: string;
}

// Combine smaller interfaces into larger interfaces
export interface RecipeItemPrp {
  images: ImageType;
  title: string;
  difficulty: DifficultyType;
  time: TimeInterface;
}

export interface FilterBadgePrp {
  item: tag;
  onSelect: (item: tag) => void;
  selected: tag[];
}

export interface FilterBadgePrpWithSelection {
  item: tag;
  selected: tag[];
  onSelect: (item: tag) => void;
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
  time: TimeInterface;
  difficulty: DifficultyType;
  images: ImageType;
  tags: tag[];
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

// Other interfaces
export interface ScrollViewEvent {
  contentInset: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  contentOffset: {
    x: number;
    y: number;
  };
  contentSize: {
    width: number;
    height: number;
  };
  layoutMeasurement: {
    width: number;
    height: number;
  };
  zoomScale: number;
}

export type NavigatorParamList = {
  navigate(arg0: string): unknown;
  search: undefined;
  filter: undefined;
};

export interface loginType {
  username: string;
  password: string;
}

export interface storeInterface {
  auth: authState;
  search: SearchState;
}

export interface authState {
  token: string;
}

export interface FilterModalPrp {
  visible?: boolean;
  onClose?: () => void;
  resultNumbs?: number;
  type?: string;
  loading?: boolean;
}

export interface GraphQlProviderPrps {
  children: ReactNode;
}

export interface SearchState {
  recipesTags: tag[];
  mealsTags: tag[];
  recipesModal: boolean;
}

export interface ButtonProps extends ViewProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}
export interface DividerProps {
  style?: StyleProp<ViewStyle>;
  height?: number;
  isSelected?: boolean; // Add isSelected prop
}
