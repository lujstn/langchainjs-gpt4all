import { GithubRepoLoader } from "langchain-gpt4all/document_loaders/web/github";

export const run = async () => {
  const loader = new GithubRepoLoader(
    "https://github.com/lujstn/langchainjs-gpt4all",
    { branch: "main", recursive: false, unknown: "warn" }
  );
  const docs = await loader.load();
  console.log({ docs });
};
