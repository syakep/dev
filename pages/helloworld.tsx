// generated by scripts/new-page.js
// @ts-ignore
import Doc, { frontmatter } from "../docs/helloworld.mdx";
import { Layout } from "../components/layout";
import ssgConfig from "../mdxx-ssg.json";

const newProps = {...ssgConfig, ...frontmatter} as any;

export const config = {
  amp: true,
};

export default () => (
  <Layout {...newProps}>
    <Doc />
  </Layout>
);
