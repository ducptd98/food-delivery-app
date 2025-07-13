export type TMessageQueueResponse<T> = {
  success: boolean;
  data: T | null;
  error?: string;
};
