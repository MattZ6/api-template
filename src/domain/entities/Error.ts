export type Error = {
  user_id?: string;
  exception_was_thrown_in: string;
  resource_url: string;
  http_method: string;
  stack: string;
  created_at: Date;
};
