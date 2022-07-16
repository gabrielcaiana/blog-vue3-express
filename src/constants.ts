export const periods = ['Today', 'This Week', 'This month'] as const;
export type Period = typeof periods[number]