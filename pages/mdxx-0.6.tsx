// generated by mdxx-ssg
import { Layout, Article } from "mdxx-ssg-components";
// @ts-ignore
import Doc, { frontmatter, toc } from "../docs/mdxx-0.6.mdx";
import history from "../gen/mdxx-0.6.history.json";
import ssgConfig from "../mdxx-ssg.json";

export const config = {
  amp: true,
};

export default () => (
  <Layout ssgConfig={ssgConfig}>
    <Article
      ssgConfig={ssgConfig}
      toc={toc}
      history={history}
      title={frontmatter.title}
    >
      <Doc amp />
    </Article>
  </Layout>
);