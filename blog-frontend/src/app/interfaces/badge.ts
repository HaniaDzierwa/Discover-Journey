export type  Colors =
  | 'PINK'
  | 'RED'
  | 'GREEN'
  | 'YELLOW'
  | 'FADED_GREEN'
  | 'FADED_RED'
  | 'GREY'
  | 'VIOLET'
  | 'LIGHT_VIOLET'
  | 'WHITE'
  | 'BLACK';

export const CategoryColors = {
  PINK: '#ec97ba' as Colors,
  RED: '#cb2f12' as Colors,
  GREEN: '#b6ca48' as Colors,
  FADED_GREEN: '#b9dab6' as Colors,
  FADED_RED: '#e59688' as Colors,
  GREY: '#d9d9d9' as Colors,
  YELLOW: '#ffcb04' as Colors,
  VIOLET: '#683a88' as Colors,
  LIGHT_VIOLET: '#b39cc3' as Colors,
  WHITE: '#ffffff' as Colors,
  BLACK: '#000000' as Colors,
};

export interface CategoryWithColorInterface {
  [category: string]: { backgroundColor: string };
}


export const CategoryWithColor: CategoryWithColorInterface = {
  ['Tag']: {
    backgroundColor: CategoryColors.GREEN
  },
  ['Duration']: {
    backgroundColor: CategoryColors.PINK
  }
}

export const getBadgeColor = (category: string): { backgroundColor: string } => {
  return CategoryWithColor[category]
}
