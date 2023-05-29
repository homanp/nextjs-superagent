import SuperagentSDK from "superagentai-js";

export const superagent = new SuperagentSDK(
  process.env.NEXT_PUBLIC_SUPERAGENT_API_TOKEN
);
